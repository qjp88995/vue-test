<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  computed: {
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
