/**
 * @Author :墨抒颖
 * @Date :2020-02-12 19:47:39
 * @LastEditTime :2020-02-12 20:18:34
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :http://sfau.lt/bPbzVVJ
 * @Description :墨抒颖
 */
import request from '@/utils/request.js'
export const getList = (params) => {
  return request({
    url: '/getList',
    method: 'get',
    params
  })
}
export const queryAnswer = (params) => {
  return request({
    url: '/queryAnswer',
    method: 'get',
    params
  })
}
export const sendAnswer = (params) => {
  return request({
    url: '/sendAnswer',
    method: 'get',
    params
  })
}
