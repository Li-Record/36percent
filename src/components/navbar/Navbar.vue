<template>
  <div class="c-navbar">
    <NavLogo></NavLogo>
    <NavItems></NavItems>
    <NavService></NavService>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
import NavItems from "@/components/navbar/NavItems.vue";
import NavLogo from "@/components/navbar/NavLogo.vue";
import NavService from "@/components/navbar/NavService.vue";

export default {
  name: "Navbar",
  components: {
    NavItems,
    NavLogo,
    NavService,
  },
};
</script>
