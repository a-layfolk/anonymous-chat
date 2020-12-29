<template>
  <div id="app">
    <main-tab-bar/>
    <!-- <router-view/> -->
    <div class="message-box">
      <div class="profile-pic">
        <!-- <img src="https://cdn.jsdelivr.net/gh/a-layfolk/FigureBed/img/course/os/image-20201218091046883.png" alt=""> -->
      </div>
      <div class="message">
        xxxxxx
      </div>
    </div>
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
  /* .message-box {
    display: flex;
  }*/
  .profile_pic, .message {
    flex: 1;
  }
</style>
