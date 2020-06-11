<template>
    <v-img :src="src" v-on:error="onImgError" :cover="true"></v-img>
</template>
<script>
    export default {
        name: 'valid-image',
        props: {
            src: '',
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