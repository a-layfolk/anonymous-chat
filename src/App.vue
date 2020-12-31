<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';

  /* #app {
    display: flex;
  }

  #main-content {
    flex: none;
  }
  #main-tab-bar {
    flex: none;
  } */
</style>
