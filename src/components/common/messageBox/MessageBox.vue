<template>
   <div class="message-box">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'MessageBox'
}
</script>

<style scoped>

  .message-box {
    display: flex;
  }
  .left, .right {
    flex: 1;
    max-width: 18vw;
    padding: 1vw;
  }
  .center {
    flex: 1;

    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;

    margin-top: 2vh;

    background-color: rgb(246, 248, 250);
  }
  .left > img, .right > img {

    width: 15vw;

    margin-top: 2vh;
  }
  .center > p {
    font-size: 3vh;
    padding: 1vh;
  }
</style>