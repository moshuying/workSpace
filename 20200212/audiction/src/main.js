/**
 * @Author :墨抒颖
 * @Date :2020-02-12 16:22:22
 * @LastEditTime :2020-02-12 20:21:28
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :http://sfau.lt/bPbzVVJ
 * @Description :墨抒颖
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// Inject global scss
import '@/style/index.scss'
import Vant from 'vant'
import 'vant/lib/button/style'
Vue.use(Vant)
process.env.NODE_ENV === 'development' && require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
