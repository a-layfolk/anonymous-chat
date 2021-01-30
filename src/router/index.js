import Vue from 'vue'
import VueRouter from 'vue-router'

const Message = () => import('views/message/Message.vue');
const AddressBook = () => import('views/addressBook/AddressBook.vue');
const Exploration = () => import('views/exploration/Exploration.vue');
const Mine = () => import('views/mine/Mine.vue');
const Login = () => import('views/login/Login.vue');

// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/message', component: Message, meta: {requireAuth: true}},
  { path: '/addressBook', component: AddressBook, meta: {requireAuth: true}},
  { path: '/exploration', component: Exploration, meta: {requireAuth: true}},
  { path: '/mine', component: Mine, meta: {requireAuth: true}}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

// 3.导出router
export default router;

