/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-03 16:49:28
 * @LastEditTime :2020-02-12 19:48:39
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
import Axios from 'axios'
import qs from 'qs'
import { Notify } from 'vant'
if (process.env.VUE_APP_BASE_API) {
  Axios.defaults.baseURL = process.env.VUE_APP_BASE_API
}
const instance = Axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    if (config.formState) {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
      Notify({
        message: res.message || '错误',
        type: 'danger'
      })
    } else {
      return res
    }
    return res
  },
  error => {
    console.log(error)
    Notify({
      message: error.message,
      type: 'danger'
    })
    return Promise.reject(error)
  }
)
export default instance
