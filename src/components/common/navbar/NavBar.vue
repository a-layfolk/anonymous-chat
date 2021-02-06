<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right" @click="goback"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 7vh;
    text-align: center;
    font-size: 2vh;
  }

  .left, .right {
    width: 20vw;
    background-color: rgb(36, 41, 46);
    padding: 2vh 0;
  }

  .left > p, .right > p{
    color: rgb(255, 255, 255);
  }
  .center {
    flex: 1;
    background-color: rgb(36, 41, 46);
    padding: 2vh 0;
  }
  .center > p {
    color: rgb(255, 255, 255);
  }
</style>