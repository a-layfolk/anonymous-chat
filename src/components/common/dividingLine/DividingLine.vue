<template>
  <div class="dividing-line">
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .dividing-line {
    display: flex;
    height: 4vh;
    text-align: center;
    font-size: 2vh;
    background-color:  rgb(241, 243, 244);
  }

  .text {
    width: 20vw;
    background-color: rgb(241, 243, 244);
    padding: .5vh 0;
  }

  .text > p {
    color: rgb(0, 0, 0);
  }
</style>