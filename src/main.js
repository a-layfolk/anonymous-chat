import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Form, FormItem, Input, Collapse, CollapseItem, Alert, Select, Option, Card} from 'element-ui';
import axios from 'axios';
import store from './store';
import network from './network';
import permission from './permission';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Alert);
Vue.use(Select);
Vue.use(Option);
Vue.use(Card);
Vue.prototype.$axios = axios; // 将 axios 绑定到全局去使用

new Vue({
  router,
  store,
  network,
  permission,
  render: h => h(App)
}).$mount('#app')