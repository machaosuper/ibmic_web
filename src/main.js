// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/common.scss'

import http from './server'
Vue.use(http)

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// window.markdownIt = mavonEditor.markdownIt
// // use
// Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
