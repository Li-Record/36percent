<template>
  <div class="p-home">
    <Navbar></Navbar>
  </div>
</template>

<style lang="sass">
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
