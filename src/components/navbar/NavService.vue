<template>
  <div class="l-navbar_service">
    <div class="l-service_item l-service_login">
      <a href="#" v-if="isLogin" @click.prevent="logout">
        登出
      </a>
      <router-link to="login" v-else>
        登入/註冊
      </router-link>
      
    </div>
    <div class="l-service_cart">
      <router-link to="cart">
        <font-awesome-icon icon="cart-arrow-down" />
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
</style>

<script>
export default {
  name: "NavService",
  data() {
    return {
      isLogin: false,
    };
  },
  created () {
    const vm = this;
    const api = `${process.env.VUE_APP_PRODUCTS_API_PATH}/api/user/check`;
    this.$http.post(api).then((response) => {
      console.log(response);
      if (response.data.success) {
        vm.isLogin = true;
      } else {
        vm.isLogin = false;
      }
    });
  },
  methods: {
    logout() {
      const vm = this;
      const api = `${process.env.VUE_APP_PRODUCTS_API_PATH}/logout`;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          // vm.$router.push("/login");
          vm.isLogin = false;
          console.log('已登出');
        }
      });
    },
  },
};
</script>
