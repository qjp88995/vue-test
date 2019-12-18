<template>
  <div id="app">
    <Nav v-if="navIsShow" />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    Nav
  },
  computed: {
    navIsShow() {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
