<template>
  <div class="message-box" :style="styleObject">
    <div class="pic" key="message-box-pic"><slot name="pic"></slot></div>
    <div class="info-box">
      <div class="name"><slot name="name"></slot></div>
      <div class="details"><slot name="details"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    bgcolor: String,
  },
  data() {
    return {
      styleObject: {
        backgroundColor: this.bgcolor
      }
    }
  }
}
</script>

<style scoped>
.message-box {
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(234, 236, 239);
}
.info-box {
  display: flex;
  flex-direction: column;
}
.pic {
  max-width: 5vw;
  padding: 1vw;
}
.pic > img {
  width: 3vw;
  margin-top: 1vh;
}
.name {
  padding: 2vh;
  font-size: 1.5vw;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.details {
  padding-bottom: 3vh;
  padding-left: 2vh;
  font-size: 2vh;
}
/* 适配移动端 */
@media screen and (max-width: 960px){
  .pic {
    max-width: 12vw;
  }
  .pic > img {
    width: 10vw;
    margin-top: 1vh;
  }
  .name > p {
    font-size: 2vw;
  }
  .details {
    padding-bottom: 1vh;
  }
  .details > p {
    font-size: 1.5vw;
  }
}
</style>