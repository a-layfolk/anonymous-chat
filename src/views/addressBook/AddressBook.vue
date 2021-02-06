<template>
  <div id="address-book">
    <div class="nav-bar">
      <nav-bar>
        <p slot="left">通讯录</p>
      </nav-bar>
    </div>

    <ul>
      <li v-for="(item, index) in subuserList" :key="index">
        <address-box v-if="index % 2 === 0">
          <img slot="pic" src="~assets/img/addressBox/avatar_male.svg">
          <p slot="name">{{item.username}}</p>
        </address-box>
        <address-box v-else>
          <img slot="pic" src="~assets/img/addressBox/avatar_female.svg">
          <p slot="name">{{item.username}}</p>
        </address-box>
      </li>
    </ul>

    <main-tab-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import AddressBox from 'components/common/addressBox/AddressBox.vue';
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue';
import { Message } from 'element-ui';

export default {
  components: {
    NavBar,
    AddressBox,
    MainTabBar
  },
  data() {
    return {
      subuserList:[]
    } 
  },
  mounted() {
    const _this = this;
    this.$axios.get('subuser/getAllSubusers')
      .then((response) => {
      _this.subuserList = response.data.data.subuserList;
    })
    .catch((error) => {
      console.log(error);
      Message.error("出错了, 无法请求到子用户数据");
    })
  }
}
</script>

<style>
  
</style>