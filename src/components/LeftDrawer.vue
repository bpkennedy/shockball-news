<template>
    <v-navigation-drawer
            :value="drawerOpen"
            :color="drawerColor"
            fixed
            stateless
            app
            dark
            :class="{cover: isMobile}"
    >
        <v-toolbar dense color="primary" :class="{'mobile-truncate': (isMobile && drawerOpen)}">
            <v-toolbar dense color="primary" class="close-and-brand-container">
                <v-btn icon @click="toggleDrawer">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <brand-text v-if="drawerOpen"/>
            </v-toolbar>
        </v-toolbar>

        <v-divider class="pb-2"></v-divider>

        <v-list dense nav class="py-0">
            <v-list-item link>
                <v-list-item-icon class="pa-0 mt-1 mr-1">
                    <shocker-icon/>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="body-2">Shockball</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import BrandText from "@/components/BrandText.vue";
    import {mapState} from 'vuex';
    import {TOGGLE_DRAWER_ACTION} from "@/store";
    import ShockerIcon from "@/components/ShockerIcon";

    export default {
        name: 'LeftDrawer',
        components: {
            ShockerIcon,
            BrandText,
        },
        data() {
            return {
                drawerColor: this.$vuetify.theme.themes.light.primary,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Photos', icon: 'mdi-image' },
                    { title: 'About', icon: 'mdi-help-box' },
                ],
            }
        },
        methods: {
            toggleDrawer() {
                this.$store.dispatch(TOGGLE_DRAWER_ACTION)
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

<style lang="scss">
    .cover {
        width: 100vw!important;
    }
    .close-and-brand-container {
        max-width: 8rem;
        box-shadow: none;
    }
    .mobile-truncate {
        & > .v-toolbar__content {
            padding-left: 0;
            .close-and-brand-container {
                background-color: $accent!important;
            }
        }
    }
</style>