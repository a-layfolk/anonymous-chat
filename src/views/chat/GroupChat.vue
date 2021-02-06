<template>
<div>
<nav-bar>
  <p slot="left">公共群聊</p>
  <p slot="right">返回《</p>
</nav-bar>

<ul>
  <li v-for="(item, index) in msgList" :key="index">
    <p v-if="item.fromName === fromName"><chat-box bgcolor="rgb(155, 233, 168)">
          <img slot="right" src="~assets/img/addressBox/avatar_male.svg" />
          <p slot="center">{{item.msg}}</p>
    </chat-box></p>
    <p v-else><chat-box>
          <img slot="left" src="~assets/img/addressBox/avatar_female.svg" />
          <p slot="center">{{item.msg}}</p>
    </chat-box></p>
  </li>
</ul>
 
<dialog-box>
  <input type="text" v-model="msg" slot="input" placeholder="请输入聊天内容" />
  <input type="button" slot="btn" @click="handleSendBtnClick" value="发送"/>
</dialog-box>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import DialogBox from 'components/common/dialogBox/DialogBox.vue';
import ChatBox from 'components/common/chatBox/ChatBox.vue';

var ws = new WebSocket('ws://localhost:8000');

export default {
  name: 'GroupChat',
  components: { 
    NavBar,
    ChatBox,
    DialogBox
  },
  data() {
    return {
      toName: null,
      fromName: localStorage.getItem("username"),
      msg: '',
      msgList: [],
    }
  },
  methods: {
    handleSendBtnClick: function () {
      ws.send(JSON.stringify({
        toName: this.toName,
        fromName: this.fromName,
        msg: this.msg,
        isclosed: false
      }));

      // 接收服务器响应回来的信息
      var _this = this;
      ws.onmessage = function (e) {
        var msg = JSON.parse(e.data).msg;
        var fromName = JSON.parse(e.data).fromName;
        _this.msgList.push({
          id: new Date().toLocaleDateString(),
          fromName: fromName,
          msg: msg,
        });
      }
    }
  }
}
</script>

<style>

</style>