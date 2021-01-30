<template>
  <div class="message-box" :style="styleObject" @click="changeView">
    <div class="pic"><slot name="pic"></slot></div>

    <div class="info">
        <span class="name"><slot name="name"></slot></span>
        <span class="message"><slot name="message"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    bgcolor: String,
    newPath: String
  },
  data: function() {
    return {
      styleObject: {
        backgroundColor: this.bgcolor
      }
    }
  },
  methods: {
    changeView: function() {
      this.$router.push(this.newPath);
    }
  }
}
</script>

<style>
.message-box {
  display: flex;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(234, 236, 239);
}
.pic {
  flex: 1;
  max-width: 5vw;
  padding: 1vw;
}
.pic > img {
  width: 3vw;
  margin-top: 1vh;
}
.name {
  margin: 2vh;
}

/* 适配移动端 */
@media screen and (max-width: 960px){
  .pic {
    max-width: 12vw;
  }
  .pic > img{
    width: 10vw;
    margin-top: 1vh;
  }
}
</style>