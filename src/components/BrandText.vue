<template>
    <div class="d-flex align-center brand-text skew" :class="{'mobile-truncate': (isMobile)}">
        <div class="inner-text-container">
            <div class="mt-1 flex-column">
                <div class="acronym black-font">GSN</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'BrandText',
        data() {
            return {
                primaryColor: this.$vuetify.theme.themes.light.accent
            }
        },
        computed: {
            ...mapState(['drawerOpen']),
            isMobile() {
                return this.$vuetify.breakpoint.xsOnly
            },
        }
    }
</script>

<style lang="scss" scoped>
    .brand-text {
        height: 100%;
        padding: 0 1rem;
        background-color: darken( $accent, 10% );
        cursor: pointer;
    }
    .skew {
        transform: skew(-20deg, 0deg);
    }
    .inner-text-container {
        height: 100%;
        padding: 0 1rem;
        background-color: $accent;
    }
    .mobile-truncate {
        padding-left: 0;
    }
    .acronym {
        font-size: 1.5rem;
    }
</style>