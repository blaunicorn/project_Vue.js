// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import './assets/font-awesome/css/font-awesome.min.css'

import axios from 'axios'

// 导入配置文件
import global_ from './assets/Global'

// 导入Vuex
import Vuex from 'vuex'
import store from './vuex/store'

import FastClick from 'fastclick'

// 全局导入alert
import {AlertPlugin} from 'vux'

// 引入echarts
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts

Vue.use(Vuex)
Vue.prototype.GLOBAL = global_
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(AlertPlugin)

FastClick.attach(document.body)

/* eslint-disable no-undef */
router.beforeEach((to, from, next) => {
  console.log('route Eacher')
  if (to.name === 'clear') {
    // 用户使用后退返回到授权页，则默认回到首页
    next()
    return false
  }
  if (to.name === 'authJump') {
    // 用户使用后退返回到授权页，则默认回到首页
    next()
    return false
  }
  if (typeof (window.localStorage.sid) === 'undefined' && to.path !== '/author' && to.name !== '/authJump' && to.meta.requireAuth) {
    // 用户使用后退返回到授权页，则默认回到首页
    window.location.href = 'https://appserver.dqt.com.cn/kaohe/index.php?r=vote/wxmp-login&url=' + to.path
    // next('/authJump')
    return false
  }
  // do something
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
