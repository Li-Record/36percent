<template>

  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
      </swiper-slide> 
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  
  
</template>
<style lang="sass" scope>
.swiper-pagination-bullet-active
  background: #fff!important

</style>
<script>
  export default {
    name: 'swiper-example-pagination-dynamic',
    title: 'Pagination / Dynamic bullets',
    data() {
      return {
        swiperOptions: {
          
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
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
  }
</script>