<template>
  <div class="c-navbar">
    <router-link to="/" class="c-navbar_logo">
      <img alt="logo" src="../assets/logo.png" />
    </router-link>
    <NavItems></NavItems>
  </div>
</template>

<style lang="sass" scoped>
@import '../sass/components/navber'

img
  width: 80px

</style>

<script>
import NavItems from "@/components/NavItems.vue";

export default {
  name: "Navbar",
  components: {
    NavItems,
  },
};
</script>
