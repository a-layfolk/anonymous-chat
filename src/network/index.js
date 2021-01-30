import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store'
import router from '../router'

// 设置 baseURL
axios.defaults.baseURL = 'http://localhost:8081'; 

// 前置拦截
axios.interceptors.request.use(config => {
  return config;
});

// 后置拦截
axios.interceptors.response.use(response => {
  let res = response.data;
  console.log(res);
  if(res.code === '200') {
    return response;
  }
  else {
    const err = res.msg;
    // 弹窗提示出现错误
    Message.error(err);
    return Promise.reject(response.data.msg);
  }
}, error => {
  if(error.data.code === 401) {
    store.commit("REMOVE_INFO");
    router.push("/login");
  } 
  else {
    // 弹窗提示出现错误
    Message.error(error.data.msg);    
    return Promise.reject(error);
  }

})
export default axios;