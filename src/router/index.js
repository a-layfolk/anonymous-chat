import Vue from 'vue'
import VueRouter from 'vue-router'

const Message = () => import('views/message/Message.vue');
const AddressBook = () => import('views/addressBook/AddressBook.vue');
const Exploration = () => import('views/exploration/Exploration.vue');
const Mine = () => import('views/mine/Mine.vue');

// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  {
    path: '/',
    component: Message
  },
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
    path: '/mine',
    component: Mine
  }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

// 3.导出router
export default router;

