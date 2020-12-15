<template>
  <div class="c-navbar_service">
    <div class="c-service_login">
      <router-link to="login">
        登入/註冊
      </router-link>
    </div>
    <div class="c-service_cart">
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
    return {};
  },
};
</script>
