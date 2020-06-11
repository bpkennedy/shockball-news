<template>
    <v-img :src="validImage" v-on:error="onImgError" :cover="true"></v-img>
</template>
<script>
    export default {
        name: 'valid-image',
        props: {
            src: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                failedLoad: false,
            }
        },
        computed: {
            validImage() {
                return this.failedLoad ? 'https://www.spearsandcorealestate.com/wp-content/themes/spears/images/no-image.png' : this.src
            }
        },
        methods: {
            onImgError() {
                this.failedLoad = true;
            }
        }
    }
</script>