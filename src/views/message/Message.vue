<template>
  <div>
      <nav-bar>
        <p slot="left">消息</p>
      </nav-bar>

    <chat-box>
      <img slot="left" src="~assets/img/messageBox/makima.jpg" />
      <p slot="center">你好啊, 我是张三</p>
    </chat-box>

    <chat-box bgcolor='rgb(241, 248, 255)'>
      <p slot="center">你好啊, 我是李四</p>
      <img slot="right" src="~assets/img/messageBox/bomb.jpg" />
    </chat-box>

    <message-box>
      <img slot="pic" src="~assets/img/messageBox/bomb.jpg" />
      <span slot="name">李俊霖</span>
      <span slot="message">最近发送的一段信息</span>
    </message-box>

    <main-tab-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ChatBox from 'components/common/chatBox/ChatBox.vue'
import MessageBox from 'components/common/messageBox/MessageBox.vue'
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default {
  components: { 
    MainTabBar,
    NavBar,
    ChatBox,
    MessageBox
  }
}
</script>

<style>

</style>