import Vue from 'vue'

// ajax 套件
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)


new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
