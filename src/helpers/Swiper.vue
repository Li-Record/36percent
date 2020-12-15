<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="https://s1.lativ.com.tw/i/ProductShow/43446_1P350_1180X630_201216_TW.jpg" alt="">
    </swiper-slide>

    <swiper-slide>
      <img src="https://s1.lativ.com.tw/i/ProductShow/43446_1P350_1180X630_201216_TW.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://s1.lativ.com.tw/i/ProductShow/43446_1P350_1180X630_201216_TW.jpg" alt="">
    </swiper-slide> 
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
          autoplay: {
            delay: 5000,
          },
          speed: 500,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }
  }
</script>