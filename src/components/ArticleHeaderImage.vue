<template>
    <div>
        <valid-image :src="currentArticle.header_image_url"/>
        <v-subheader class="text-squeeze">{{currentArticle.header_image_subtitle}}</v-subheader>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import ValidImage from "./ValidImage";

    export default {
        name: 'article-header-image',
        components: {ValidImage},
        computed: {
            ...mapState(['currentArticle']),
        },
    }
</script>
