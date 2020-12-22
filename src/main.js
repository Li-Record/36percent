
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
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'

Vue.use(VueAxios, axios)

SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// fontawesome
library.add(faCartArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// 登入帶 cookie 並記錄
// axios 設定
axios.defaults.withCredentials = true;

new Vue({
  router,
  created() {
    // 取得 cookie 並代入 api header
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)sToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.$http.defaults.headers.common['Authorization'] = token;
  },
  render: h => h(App)
}).$mount('#app')
