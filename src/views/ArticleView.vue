<template>
    <v-container fluid class="article-view pa-0">
        <v-row align="start" justify="center" :class="{'mobile-width ma-0': isTabletOrSmaller}">
            <v-col v-if="!isTabletOrSmaller" cols="3" class="mr-0">
                <v-row align-items="stretch">
                    <v-card tile class="mx-auto">
                        <template v-for="story of recentArticlesList">
                            <article-list-item :key="story.uid"
                                               :title="story.title"
                                               :created-on="story.created_on"
                                               :author-name="story.author_name"
                                               :to="story.uid"/>
                            <v-divider></v-divider>
                        </template>
                    </v-card>
                </v-row>
            </v-col>
            <v-col :cols="dynamicMainColumnSize" :class="{'pa-0': isTabletOrSmaller}">
                <v-row :class="{'mobile-width ma-0': isTabletOrSmaller}">
                    <v-card flat tile height="100%" width="100%" class="mx-auto pt-6 pl-0 pr-0 pb-6">
                        <article-title/>
                        <article-header-image/>
                        <article-author/>
                        <article-content/>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ArticleAuthor from "@/components/ArticleAuthor";
    import ArticleHeaderImage from "@/components/ArticleHeaderImage";
    import ArticleTitle from "@/components/ArticleTitle";
    import ArticleContent from "@/components/ArticleContent";
    import ArticleListItem from "@/components/ArticleListItem";
    import {GET_SINGLE_ARTICLE_ACTION} from "../store";
    import {mapState} from "vuex";

    export default {
        name: 'ArticleView',
        components: {
            ArticleListItem,
            ArticleContent,
            ArticleTitle,
            ArticleHeaderImage,
            ArticleAuthor,
        },
        computed: {
            ...mapState(['recentArticlesList']),
            isTabletOrSmaller() {
                return this.$vuetify.breakpoint.mdAndDown
            },
            dynamicMainColumnSize() {
                return this.isTabletOrSmaller ? 12 : 8
            }
        },
        created() {
            this.$store.dispatch(GET_SINGLE_ARTICLE_ACTION, this.$route.params.articleId)
        }
    }
</script>

<style lang="scss" scoped>
    .article-view {
        width: 77.5rem;
    }
    .mobile-width {
        width: 100%;
        max-width: 100%;
    }
</style>
