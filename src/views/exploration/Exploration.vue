<template>
  <div>
    <nav-bar>
      <p slot="left">发现</p>
    </nav-bar>
      <input v-model="username" type="text" placeholder="请输入用户名"/>
      <input v-model="password" type="password" placeholder="请输入密码" />
      <input type="submit" value="登录" @click="send"/>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

import axios from 'axios'
// import qs from 'qs'

// const instance = axios.create({
//   baseURL: 'http://localhost:8000',
//   timeout: 5000
// })

// 设置请求拦截器
// instance.interceptors.request.use(config => {
//    // 参数转换为表单模式
//   if(config.data) {
//     config.data = qs.stringify(config.data);
//   }

//   // 设置请求头
//   config.headers = {
//     // 模拟form表单方式提交请求
//     'Content-Type': 'application/x-www-form-urlencoded', 
//   }
// })

// // 设置响应拦截器
// instance.interceptors.response.use(response => response, error => {
//   console.log(error);
// })

export default {
  components: { 
    NavBar
  },
  methods: {
    send() {
      axios({
        url: 'http://localhost:8080/wx/login',
        method: 'get',
        params: {
          code: '123456',
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res);
      })
    }  
  },
  data: function() {
    return {
      username: "",
      password: ""
    }
  }
}


</script>

<style>

</style>