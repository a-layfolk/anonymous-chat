<template>
  <div class="tool-box">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'ToolBox'
}
</script>

<style scoped>
.tool-box {
    display: flex;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(234, 236, 239);
}
.left {
    flex: 1;
    max-width: 5vw;
    padding: 1vw;
}
.left > img {
    width: 3vw;
    margin-top: 1vh;
}
.center {
    flex: 1;
    margin-top: 2vh;
}
.center > p {
    font-size: 1vw;
    padding: 2vh 2vh;
}
.right {
    flex: 1;
    max-width: 5vw;
    padding-left: 2vw;
    padding-top: 1vh;
}
.right > img {
    width: 3vw;
    margin-top: 2vh;
}

/* 适配移动端 */
@media screen and (max-width: 960px){
    .left, .right {
        max-width: 12vw;
    }
    .left > img, .left > img{
        width: 9vw;
    }
}
</style>