<template>
  <div class="c-navbar">
    <NavLogo></NavLogo>
    <NavItems></NavItems>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
import NavItems from "@/components/navbar/NavItems.vue";
import NavLogo from "@/components/navbar/NavLogo.vue";

export default {
  name: "Navbar",
  components: {
    NavItems,
    NavLogo,
  },
};
</script>
