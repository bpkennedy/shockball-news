<template>
    <v-container fluid class="main-content-width pa-0" :class="{'full-width': isTabletOrSmaller}">
        <v-row align="baseline" justify="center" class="ma-0" :class="{'full-width': isTabletOrSmaller}">
            <v-col cols="2" v-if="!isTabletOrSmaller" class="d-flex flex-column">
                <v-row align="baseline" justify="center">
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
<!--                    <story-card class="pa-2 mb-2 mr-6"/>-->
                </v-row>
            </v-col>
            <v-col :cols="dynamicMainColumnSize" class="d-flex flex-column" :class="{'pa-0': isTabletOrSmaller}">
                <v-row align="baseline" justify="center" v-for="story of recentArticlesList" :key="story.uid" class="ma-2" :class="{'no-margin': isTabletOrSmaller}">
                    <story-card :title="story.title"
                                :image-url="story.header_image_url"
                                :created-on="story.created_on"
                                :author-name="story.author_name"
                                :to="story.uid"
                                class="mb-2" :class="{'mx-0': isTabletOrSmaller}"/>
<!--                    <story-card class="pa-2 mb-2" :class="{'mx-0': isTabletOrSmaller}"/>-->
                </v-row>
            </v-col>
            <v-col cols="3" v-if="!isTabletOrSmaller" class="d-flex flex-column">
                <v-row align="baseline" justify="center">
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
<!--                    <story-card class="pa-2 mb-2 ml-6"/>-->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import StoryCard from "@/components/StoryCard";
    import {mapState} from "vuex";

    export default {
        name: "DashboardView",
        components: {
            StoryCard,
        },
        computed: {
            ...mapState(['recentArticlesList']),
            isTabletOrSmaller() {
                return this.$vuetify.breakpoint.mdAndDown
            },
            dynamicMainColumnSize() {
                return this.isTabletOrSmaller ? 12 : 6
            }
        },
    }
</script>

<style lang="scss">
    .v-application .no-margin {
        margin: 0!important;
    }
    .v-application .title {
        line-height: 1.5rem;
    }
    .v-application .v-card__text .title {
        font-size: 1.15rem!important;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
</style>
