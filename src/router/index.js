import Vue from 'vue'
import VueRouter from 'vue-router'

const Message = () => import('views/message/Message.vue');
const AddressBook = () => import('views/addressBook/AddressBook.vue');
const Empowerment = () => import('views/empowerment/Empowerment.vue');
const Mine = () => import('views/mine/Mine.vue');
const SubuserLogin = () => import('views/login/SubuserLogin.vue');
const GroupChat = () => import('views/chat/GroupChat.vue');
const SingleChat = () => import('views/chat/SingleChat.vue');
const About = () => import('components/content/about/About.vue');
// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  { path: '/', redirect: '/subuserlogin' },
  { path: '/subuserlogin', component: SubuserLogin },
  { path: '/message', component: Message, meta: {requireAuth: true}},
  { path: '/addressBook', component: AddressBook, meta: {requireAuth: true}},
  { path: '/empowerment', component: Empowerment, meta: {requireAuth: true}},
  { path: '/mine', component: Mine, meta: {requireAuth: true}},
  { path: '/groupChat', component: GroupChat, meta: {requireAuth: true}},
  { path: '/singleChat', component: SingleChat, meta: {requireAuth: true}},
  { path: '/about', component: About, meta: {requireAuth: true}}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

// 3.导出router
export default router;

