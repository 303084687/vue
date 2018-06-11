// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routerConfig from './router-config'
import {postRequest, getRequest} from './util/request'
Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
  routes: routerConfig
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
