import Vue from 'vue'
import VueRouter from 'vue-router'

const Message = () => import('views/message/Message.vue');
const AddressBook = () => import('views/addressBook/AddressBook.vue');
const Exploration = () => import('views/exploration/Exploration.vue');
const Me = () => import('views/me/Me.vue');

// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  {
    path: '/message',
    component: Message
  },
  {
    path: '/addressBook',
    component: AddressBook
  },
  {
    path: '/exploration',
    component: Exploration
  },
  {
    path: '/me',
    component: Me
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

// 3.导出router
export default router;

