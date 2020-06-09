<template>
    <div class="pt-4 text-squeeze" v-html="markdownAsHtml"></div>
</template>
<script>
    import {mapState} from 'vuex'
    import MarkdownIt from 'markdown-it'

    export default {
        name: 'article-content',
        data() {
            return {
                md: new MarkdownIt({
                    linkify: true,
                    typographer: true,
                    breaks: true,
                    html: true,
                })
            }
        },
        computed: {
            ...mapState(['currentArticle']),
            markdownAsHtml() {
                if (this.currentArticle.content) {
                    const encodedString = this.currentArticle.content
                    const decodedString = encodedString.replace(/\\n/g, '\n')
                    return this.md.render(decodedString)
                }
                return ''
            }
        }
    }
</script>
