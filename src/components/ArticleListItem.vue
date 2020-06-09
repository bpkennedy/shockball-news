<template>
    <v-list-item three-line class="border-right" :to="{ name: 'Article', params: { articleId: to }}" @click="loadStory">
        <v-list-item-content>
            <v-list-item-title class="article-title">{{title}}</v-list-item-title>
            <v-list-item-subtitle class="grey--text">
                {{createdOn}} - {{authorName}}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>
<script>
    import {GET_SINGLE_ARTICLE_ACTION} from "../store";

    export default {
        name: 'article-list-item',
        props: {
            title: {
                type: String,
                required: true,
            },
            createdOn: {
                type: String,
                required: true,
            },
            authorName: {
                type: String,
                required: true,
            },
            to: {
                type: String,
                required: true,
            }
        },
        methods: {
            loadStory() {
                this.$store.dispatch(GET_SINGLE_ARTICLE_ACTION, this.to)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .border-right {
        border-right: 1px solid rgb(240, 240, 240);
    }

    .article-title {
        overflow: auto;
        text-overflow: inherit;
        white-space: normal;
    }
</style>