<template>
    <v-card class="story-card mx-auto mb-3" flat :to="{ name: 'Article', params: { articleId: to }}">
        <valid-image :src="imageUrl" class="story-image white--text align-end"/>
        <v-card-text class="text--primary my-0 py-1 pb-0">
            <div class="title font-weight-bold">{{title}}</div>
        </v-card-text>
        <v-card-subtitle class="py-0 pb-2 caption grey--text">{{createdOn}} <span>&#183;</span> {{authorName}}</v-card-subtitle>
    </v-card>
</template>

<script>
    import ValidImage from "./ValidImage";
    export default {
        name: "StoryCard",
        components: {ValidImage},
        props: {
            title: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: false,
            },
            createdOn: {
                type: String,
                required: true,
            },
            authorName: {
                type: String,
                required: false,
            },
            to: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss">
    .story-card {
        width: 100%;
        border-radius: 10px!important;
    }
    .story-image {
        height: 200px;
    }

</style>