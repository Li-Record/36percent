
import Vue from 'vue'

// ajax 套件
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 sass
import './sass/main.sass'

import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

Vue.use(VueAxios, axios)


new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
