<template>
  <div class="dialog-box-item">
    <input type="text"/>
    <input type="button" value="发送" />
  </div>
</template>

<script>
export default {
  name: 'DialogBox'
}
</script>

<style scoped>
.dialog-box-item {
  display: flex;
  padding: 0 5vw;
}
.dialog-box > input, .dialog-box > button {
  flex: 1;
  font-size: 2vh;
}
input[type=text] {
  height: 8vh;
  border: 0;  /*去除未选中状态的边框*/
  border-radius: 6px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  min-width: 70vw;
  background-color: rgb(250, 251, 252);
}
input[type=text]:focus {
  outline-color: rgb(3, 102, 214);
  box-shadow: 0px 5px 5px rgba(179, 209, 243, 1);
  background-color: rgb(255, 255, 255);
}
input[type=button] {
  background-color: rgb(250, 251, 252);
  border: 0;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  margin-left: 1vw;
}
input[type=button]:hover{
  border: 0;
  background-color: rgb(230, 230, 230);
}
input[type=button]:focus{
  outline: 0;
}
</style>