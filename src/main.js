
import Vue from 'vue'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ajax 套件
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 sass
import './sass/main.sass'

import App from './App.vue'
import router from './router'

// fontawesome
library.add(faCartArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

Vue.use(VueAxios, axios)


new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
