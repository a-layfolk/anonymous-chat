<template>
  <div>
      <nav-bar>
        <p slot="left">通讯录</p>
      </nav-bar>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/makima.jpg">
        <p slot="name">玛奇玛</p>
      </address-box>
      <address-box>
        <img slot="pic" src="~assets/img/messageBox/bomb.jpg">
        <p slot="name">蕾塞</p>
      </address-box>
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