import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Form, FormItem, Input } from 'element-ui';
import axios from 'axios';
import store from './store';
import network from './network';
import permission from './permission';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$axios = axios; // 将 axios 绑定到全局去使用

new Vue({
  router,
  store,
  network,
  permission,
  render: h => h(App)
}).$mount('#app')