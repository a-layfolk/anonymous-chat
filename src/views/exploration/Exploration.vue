<template>
  <div>
    <nav-bar>
      <p slot="left">发现</p>
    </nav-bar>

    <div class="send-message">
        <input type="text"/>
        <input type="button" value="发送" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { 
    NavBar
  }
}
</script>

<style>
.send-message {
  display: flex;
  padding: 0 20vw;
}
.send-message > input, .send-message > button {
  flex: 1;
}
input[type=text] {
  height: 8vh;
  border: 0;  /*去除未选中状态的边框*/
  border-radius: 6px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  min-width: 50vw;
  font-size: 2vh;
}
input[type=text]:focus {
  font-size: 2vh;
  outline-color: rgb(3, 102, 214);
  box-shadow: 0px 5px 5px rgba(179, 209, 243, 1);
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
  background-color: rgb(243, 244, 246);
}
input[type=button]:focus{
  outline: 0;
}
/* .send-message > input:focus {
  border: 1px solid rgb(179, 209, 243);
} */
</style>