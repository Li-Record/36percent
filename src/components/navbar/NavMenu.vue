<template>
<div>
 <div class="l-navbar_btn">
    <button class="l-navbar_btn_toggle" :class="{'l-navbar_btn_active':isToggle}" @click="toggleMenu" type="button">
      <span class="l-navbar_btn_icon">
      </span>
    </button>
  </div>
  <div class="l-navbar_menu" :class="{'l-navbar_menu_active':isToggle}">
  </div>
</div>
   
</template>

<style lang="sass" scoped>
</style>

<script>
import NavItems from "@/components/navbar/NavItems.vue";
import NavService from "@/components/navbar/NavService.vue";

export default {
  name: "NavMenu",
  data() {
    return {
      isToggle: false,
    }
  },
  components: {
    NavItems,
    NavService,
  },
  methods: {
    toggleMenu() {
      this.isToggle = !this.isToggle;
    }
  },
  
};
</script>
