import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';
import '@/fonts/font/iconfont.js';
import '@/static/common.css'
import Api from './api/index.js';

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$axios=axios


import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$api = Api;

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
