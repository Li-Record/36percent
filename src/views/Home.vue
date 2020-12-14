<template>
  <div class="p-home">
    <Navbar></Navbar>
  </div>
</template>

<style lang="sass">
@import '../sass/page/home.sass'
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
