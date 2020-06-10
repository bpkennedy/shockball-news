import { db } from './firebase'
import { swcTime } from './utils'

const dateFields = [
    'created_on',
    'modified_on',
]

const getOne = async ({ id, collection }: {id: string, collection: string}) => {
    const doc = await db.collection(collection).doc(id).get()
    if (!doc.exists) {
        return null
    }
    return doc.data()
}

const getAll = async ({ collection }: {collection: string}) => {
    const snapshot = await db.collection(collection).get()
    return iterateSnapshotForItems(snapshot)
}

const queryBuilder = async ({ collection, queries }: {collection: string, queries: any[]}) => {
    const ref = db.collection(collection)
    let firestoreQuery: any
    queries.forEach((query, index) => {
        if (index === 0) {
            firestoreQuery = ref.where(query.field, query.comparison, query.value)
        } else {
            firestoreQuery.where(query.field, query.comparison, query.value)
        }
    })
    const snapshot = firestoreQuery ? await firestoreQuery.get() : []
    return iterateSnapshotForItems(snapshot)
}

export const getRecentArticles = async () => {
    const ref = db.collection('article_meta')
        .orderBy('created_on')
        .limit(25)
    const snapshot = await ref.get()
    return iterateSnapshotForItems(snapshot)
}

export const getAppConfig = async () => {
    const config = await getOne({id: 'global', collection: 'config'})
    if (config.last_server_update_date) {
        config.last_server_update_date = config.last_server_update_date.toDate()
    }
    return config
}

export const getOneArticle = async (articleId: string) => {
    const articleMeta = queryBuilder({
        collection: 'article_meta',
        queries: [{
            field: 'uid',
            comparison: '==',
            value: articleId
        }]
    })
    const articleContent = queryBuilder({
        collection: 'article_content',
        queries: [{
            field: 'uid',
            comparison: '==',
            value: articleId
        }]
    })
    const articleData = await Promise.all([articleMeta, articleContent])
    const article = {
        ...articleData[0][0],
        ...articleData[1][0],
    }
    return article
}

function iterateSnapshotForItems (snapshot: any) {
    if (snapshot.empty) {
        return []
    }
    const unsanitizedItems = snapshot.docs.map((item: any) => item.data())
    return sanitizeFields(unsanitizedItems)
}

function sanitizeFields (items: any[]) {
    return items.map(i => {
        dateFields.forEach(fieldName => {
            if (i[fieldName]) {
                i[fieldName] = swcTime(i[fieldName].toDate())
            }
        })
        return i
    })
}