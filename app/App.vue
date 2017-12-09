<template>
  <div id="app" class="container">
    <app-header></app-header>
    <indicator title="A" value="456" />
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import Indicator from './components/Indicator.vue'

  export default {
    components: { AppHeader, AppFooter, Indicator }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
