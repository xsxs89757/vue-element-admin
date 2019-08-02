/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import i18n from '@/lang/index.js'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  validateStatus: function(status) {
    return status >= 200 && status <= 500
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = getToken()
    }
    config.headers['x-lang'] = store.getters.language
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。
    var token = response.headers.authorization
    if (token) {
      // 如果 header 中存在 token，那么触发 RefreshToken 方法，替换本地的 token
      store.dispatch('RefreshToken', token)
      // location.reload() // 刷新 暂时注销
    }
    const res = response.data
    if (res.code !== 20000) {
      if (res.message) {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(i18n.t('login.expireLoginOut'), i18n.t('login.expireLoginOutTitle'), {
          confirmButtonText: i18n.t('login.refreshLogin'),
          cancelButtonText: i18n.t('table.cancel'),
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        }).catch(err => {

        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
