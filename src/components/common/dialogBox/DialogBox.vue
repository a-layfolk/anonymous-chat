<template>
<div id="dialog">
<div id="dialog-box">
  <div class="dialog-box-item">
    <div><slot name="input"></slot></div>
    <div><slot name="btn"></slot></div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'DialogBox'
}
</script>

<style scoped>
#dialog {
  padding-top: 8vh;
}
#dialog-box {
  display: flex;
  background-color: rgb(255, 255, 255);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);

}
.dialog-box-item {
  display: flex;
  padding: 0 5vw;
  background-color: rgb(222, 225, 230);
}
.dialog-box > input, .dialog-box > button {
  font-size: 2vw;
}
input[type=text] {
  height: 8vh;
  border: 0;  /*去除未选中状态的边框*/
  border-radius: 6px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  min-width: 70vw;
  background-color: rgb(241, 243, 244);
  padding-left: 3vw;
}
input[type=text]:focus {
  outline-color: rgb(3, 102, 214);
  box-shadow: 0px 5px 5px rgba(179, 209, 243, 1);
  background-color: rgb(255, 255, 255);
}
input[type=button] {
  height: 8vh;
  background-color: rgb(155, 233, 168);
  border: 0;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  min-width: 20vw;
  border-radius: 30%;
  margin-left: 1vw;
}
input[type=button]:hover{
  border: 0;
  background-color: rgb(64, 196, 99);
}
input[type=button]:focus{
  outline: 0;
}
</style>