<template>
  <header>
    <div class="l-navbar" :class="{'l-navbar_active': isScroll}">
      <NavLogo></NavLogo>
      <NavItems></NavItems>
      <NavService :is-login="isLogin"></NavService>
    </div>
  </header>
  
</template>

<style lang="sass" scoped>
</style>

<script>
import NavItems from "@/components/navbar/NavItems.vue";
import NavLogo from "@/components/navbar/NavLogo.vue";
import NavService from "@/components/navbar/NavService.vue";

export default {
  name: "Navbar",
  props: ["isLogin"],
  data() {
    return {
      isScroll: false
    }
  },
  components: {
    NavItems,
    NavLogo,
    NavService,
  },
  mounted(){
    window.addEventListener('scroll', this.navScrollStyle, false);
  },
  methods: {
    navScrollStyle() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        this.isScroll = true;
      }else {
        this.isScroll = false;
      }
    }
  },
};
</script>
