<template>
    <v-app-bar
            :app="!isMobile"
            color="primary"
            dark
            dense
            flat
            fixed
            class="top-bar-container"
    >
        <div class="main-content-width d-flex ma-auto">
            <v-toolbar dense color="primary" class="nav-and-brand-container" :class="{'mobile-fill': isMobile}">
                <v-app-bar-nav-icon v-if="!drawerOpen && isMobile" @click="toggleDrawer"></v-app-bar-nav-icon>
                <brand-text v-if="!drawerOpen" @click.native="goHome"/>
            </v-toolbar>
            <v-toolbar v-if="!isMobile" dense flat color="primary" class="ml-4 body-2">
                SHOCKBALL
            </v-toolbar>
        </div>
    </v-app-bar>
</template>

<script>
    import BrandText from "@/components/BrandText.vue";
    import {TOGGLE_DRAWER_ACTION} from "@/store";
    import {mapState} from "vuex";
    import ShockerIcon from "@/components/ShockerIcon";

    export default {
        name: 'TopBar',
        components: {
            ShockerIcon,
            BrandText,
        },
        methods: {
            toggleDrawer() {
                this.$store.dispatch(TOGGLE_DRAWER_ACTION)
            },
            goHome() {
                this.$router.push({ path: '/'})
            }
        },
        computed: {
            ...mapState(['drawerOpen','isMobile']),
            isMobile() {
                return this.$vuetify.breakpoint.xsOnly
            },
        }
    }
</script>

<style lang="scss">
    .top-bar-container {
        > .v-toolbar__content {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
        }
        .nav-and-brand-container {
            max-width: 8rem;
            box-shadow: none;
            &.mobile-fill {
                background-color: $accent!important;
            }
        }
    }
</style>