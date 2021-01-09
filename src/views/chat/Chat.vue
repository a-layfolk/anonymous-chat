<template>
  <div>
    <message-box>
      <img slot="left" src="~assets/img/messageBox/makima.jpg" />
      <p slot="center">你好啊, 我是张三</p>
    </message-box>

    
  </div>
</template>

<script>
import MessageBox from 'components/common/messageBox/MessageBox.vue'
export default {
  components: { MessageBox },

}
</script>

<style>

</style>