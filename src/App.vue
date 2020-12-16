<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="sass">

</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Navbar,
    Footer,
  },
  
};
</script>
