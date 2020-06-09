<template>
    <div class="article-author text-squeeze">
        <v-row no-gutters>
            <v-col class="avatar-container">
                <v-avatar>
                    <img
                            :src="currentArticle.author_image"
                            :alt="currentArticle.author_name"
                    >
                </v-avatar>
            </v-col>
            <v-col>
                <p class="ma-0 body-2">{{currentArticle.author_name}}</p>
                <p class="ma-0 body-2">{{currentArticle.author_role}}</p>
            </v-col>
            <v-col cols="4" align="right" class="grey--text body-2">
                {{currentArticle.created_on}}
            </v-col>
        </v-row>
        <v-divider class="mt-3"></v-divider>
    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: 'ArticleAuthor',
        computed: {
            ...mapState(['currentArticle']),
        }
    }
</script>
<style lang="scss" scoped>
    .avatar-container {
        max-width: 4rem;
    }
</style>