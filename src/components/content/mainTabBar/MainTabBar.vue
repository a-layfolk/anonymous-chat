<template>
<div id="main-tab-bar">
  <tab-bar>
      <tab-bar-item path="/message">
          <img slot="item-icon" src="~assets/img/tabbar/message.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/message_active.svg" alt="">
          <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/addressBook">
          <img slot="item-icon" src="~assets/img/tabbar/address_book.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/address_book_active.svg" alt="">
          <div slot="item-text">通讯录</div>
      </tab-bar-item>
      <tab-bar-item path="/exploration">
          <img slot="item-icon" src="~assets/img/tabbar/exploration.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/exploration_active.svg" alt="">
          <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
          <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/me_active.svg" alt="">
          <div slot="item-text">我</div>
      </tab-bar-item>
    </tab-bar>
</div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar', 
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>
#main-tab-bar {
    padding-top: 8vh;
}
</style>