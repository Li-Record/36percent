<template>
    <div class="l-navbar_menu">
      <button class="l-navbar_menu_toggle" :class="{'l-navbar_menu_active':isToggle}" @click="toggleMenu" type="button">
        <span class="l-navbar_menu_icon">
        </span>
      </button>
    </div>
</template>

<style lang="sass" scoped>
</style>

<script>

export default {
  name: "NavMenu",
  data() {
    return {
      isToggle: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isToggle = !this.isToggle;
    }
  },
  
};
</script>
