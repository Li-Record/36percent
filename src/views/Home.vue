<template>
  <div class="p-home">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
</template>

<style lang="sass">
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar/Navbar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
  },
};
</script>
