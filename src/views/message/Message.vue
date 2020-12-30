<template>
  <div>
      <nav-bar>
        <div slot="left">消息</div>
      </nav-bar>

    <message-box>
      <img slot="left" src="~assets/img/messageBox/github.svg" />
      <p slot="center">你好啊, 我是张三</p>
    </message-box>

    <message-box>
      <p slot="center">你好啊, 我是李四</p>
      <img slot="right" src="~assets/img/messageBox/github.svg" />
    </message-box>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import MessageBox from 'components/common/messageBox/MessageBox.vue'
export default {
  components: { 
    NavBar,
    MessageBox
  }
}
</script>

<style>

</style>