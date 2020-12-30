<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 4vh;
    text-align: center;
    font-size: 2vh;
  }

  .left, .right {
    width: 20vw;
    background-color: rgb(246, 246, 246);
  }

  .center {
    flex: 1;
    background-color: rgb(246, 246, 246);
  }
</style>