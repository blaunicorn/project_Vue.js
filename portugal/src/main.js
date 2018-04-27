// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入配置文件
import global_ from './assets/Global'
Vue.prototype.GLOBAL = global_

// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 导入jquery
import $ from 'jquery'

// 导入 bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/bootstrap/css/app.css';

// 引入vue-video-player
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
