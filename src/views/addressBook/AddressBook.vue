<template>
  <div id="address-book">
    <div class="nav-bar">
      <nav-bar>
        <p slot="left">通讯录</p>
      </nav-bar>
    </div>
    <div class="main-content">
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/makima.jpg">
        <p slot="name">玛奇玛</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
       <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
       <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
       <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
       <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import AddressBox from 'components/common/addressBox/AddressBox.vue'
export default {
  components: {
    NavBar,
    AddressBox
  }
}
</script>

<style>
  
</style>