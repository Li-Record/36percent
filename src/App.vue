<template>
  <div id="app">
    <Navbar :is-login="isLogin"></Navbar>
    <main class="l-main">
      <router-view />
    </main>
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
    return {
      isLogin: false,
    }
  },
  created () {
    this.checkLogin();
  },
  updated () {
    this.checkLogin();
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    checkLogin() {
      const vm = this;
      const api = `${process.env.VUE_APP_PRODUCTS_API_PATH}/api/user/check`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.isLogin = true;
        } else {
          vm.isLogin = false;
        }
      });
    }
  },
};
</script>
