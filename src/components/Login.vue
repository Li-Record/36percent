<template>
  <div>
    <div class="c-login c-login_bg"></div>
    <div class="c-login c-login_border">
      <form>
        <div class="c-login_inputWrap">
          <input
            class="c-login_input"
            type="text"
            id="loginAccount"
            placeholder="請輸入帳號"
            v-model="user.username"
          />
        </div>
        <div class="c-login_inputWrap">
          <input
            class="c-login_input"
            type="password"
            id="loginPwd"
            placeholder="請輸入密碼"
            v-model="user.password"
          />
        </div>
        <div class="c-login_inputWrap">
          <div class="c-login_link">
            <a href="#">忘記密碼?</a>
            <a href="#">註冊</a>
          </div>
        </div>
        <div class="c-login_inputWrap">
          <button class="c-login_btn" id="login" @click="login">登入</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      const vm = this;
      const api = `${process.env.VUE_APP_PRODUCTS_API_PATH}/admin/signin`;
      vm.$http.post(api, vm.user).then((response) => {
        if(response.data.success) {
          vm.$router.push({ path: '/' })
        }
      });
    }
  },
};
</script>