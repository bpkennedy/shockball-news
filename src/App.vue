<template>
  <v-app>
    <top-bar />
    <left-drawer />
    <v-content class="pt-12">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
import LeftDrawer from "@/components/LeftDrawer.vue";

export default {
  name: 'App',
  components: {
    TopBar,
    LeftDrawer,
  },
}
</script>

<style lang="scss">

</style>
