import axios from 'axios'
import qs from 'qs'

export function request(config){

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
	  timeout: 5000
    })
  
  // 设置请求拦截器
  instance.interceptors.request.use(config => {
    // 参数转换为表单模式
    if(config.data) {
      config.data = qs.stringify(config.data);
    }

    // 设置请求头
    config.headers = {
      // 模拟form表单方式提交请求
      'Content-Type': 'application/x-www-form-urlencoded', 
      // 设置token
      'Access-Token': store.getters.token === undefined ? '' : store.getters.token() 
    }
    return config;
  }, error => {
    console.log(error);
  })

  // 设置响应拦截器
  instance.interceptors.response.use(response => response, error => {
    console.log(err);
  })

  return instance(config)
}