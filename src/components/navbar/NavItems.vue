<template>
  <div class="l-navbar_nav">
    <nav>
      <div class="l-navbar_item" v-for="(item, index) in navItems" :key="index">
        <router-link :to="{ path: '/' + item.path }" class="l-navbar_link">
        {{ item.title }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="sass">
</style>

<script>
export default {
  name: "NavItems",
  data() {
    return {
      navItems: [
        {
          title: "Man",
          path: "man",
        },
        {
          title: "Women",
          path: "women",
        },
        {
          title: "Kid",
          path: "kid",
        },
        {
          title: "Baby",
          path: "baby",
        },
      ],
    };
  },
};
</script>
