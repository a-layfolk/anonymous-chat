<template>
  <div>
    <nav-bar>
      <p slot="left">消息</p>
    </nav-bar>

    <dividing-line>
      <p slot="text">公共群聊</p>
    </dividing-line>

    <router-link :to="{path: '/groupChat'}">
    <message-box>
      <img slot="pic" src="~assets/img/chat/group_chat.svg">
      <p slot="name">群聊</p>
      <p slot="details">这是一个公共的群聊</p> 
    </message-box>
    </router-link>

    <dividing-line>
      <p slot="text">匿名身份</p>
    </dividing-line>
    
    <ul>
      <li v-for="(item, index) in avatarList" :key="index">
        <router-link :to="{path: '/singleChat', query: {toName: item.ava_name}}">
          <message-box>
            <img slot="pic" v-bind:src="item.avatar_img_url" />
            <p slot="name">{{item.ava_name}}</p>
            <p slot="details">{{item.description}}</p>
          </message-box>
        </router-link>
      </li>
    </ul>


    <main-tab-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue';
import DividingLine from 'components/common/dividingLine/DividingLine.vue';
import MessageBox from 'components/common/messageBox/MessageBox.vue';
import { Message } from 'element-ui';

export default {
  components: { 
    MainTabBar,
    NavBar,
    MessageBox,
    DividingLine
  },
  data() {
    return {
      avatarList: []
    }
  },
  mounted(){
    const _this = this;
    // console.log('页面创建成功');
    // 每次页面挂载之后, 率先向后端申请 7 个匿名身份
    this.$axios.get('/avatar/getAvatarData?end=7')
      .then((response) => {
        // console.log(response.data.data.avatarList);
        _this.avatarList = response.data.data.avatarList;
      })
      .catch((error) => {
        console.log(error);
        Message.error("出错了, 无法申请匿名身份");
      });
  }
} 
</script>

<style>

</style>