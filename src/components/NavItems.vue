<template>
  <div>
    <nav class="c-nav">
      <router-link :to="{path: '/' + item.path}" class="c-nav_item" v-for="(item, index) in navItems" :key="index">{{ item.title }}</router-link>
    </nav>
  </div>
</template>

<style lang="sass">
@import '../sass/components/navber'

</style>

<script>

export default {
  name: "NavItems",
  data() {
    return {
      navItems: [
        {
          title: 'Man',
          path: 'man',
        },
        {
          title: 'Women',
          path: 'women',
        },
        {
          title: 'Kid',
          path: 'kid',
        },
      ],
    }
  },
};
</script>
