<template>
  <div id="app">
    <router-view />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <Menu msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  // import Menu from './components/Menu.vue';
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      // Menu,
      // HelloWorld,
    },
    watch: {
      $route(to, from) {
        document.title = to.meta.title || 'Unduhduh';
      },
    }
  }
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 50px;
}
</style>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
@import "~bootstrap/scss/bootstrap";
@import "./styles/variables";
@import "./styles/app";
</style>
