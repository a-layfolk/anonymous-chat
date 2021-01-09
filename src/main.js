import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// axios({
//   url: 'http://localhost:8080/wx/login',
//   method: 'get',
//   params: {
//     code: '123456'
//   }
// }).then(res => {
//   console.log(res);
// })