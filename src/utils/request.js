import axios from 'axios'
import { Message } from 'view-design';
const service = axios.create({
  // TODO:配置请求url
  baseURL: '/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
     // TODO:请求头带 token
      console.log('请求信息config:', config)
     return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    return res
  },
  error => {
    console.log(error) // for debug
    
    Message.error('请求失败');
    return Promise.reject(error)
  }
)

export default service