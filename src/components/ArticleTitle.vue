<template>
    <h1 class="bold-font pb-6 text-squeeze">{{currentArticle.title}}</h1>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: 'article-title',
        computed: {
            ...mapState(['currentArticle'])
        }
    }
</script>
<style lang="scss" scoped>
    .bold-font {
        line-height: 2rem;
    }
</style>