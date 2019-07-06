<template>
  <div id="app">
    <Menu></Menu>
     <router-view></router-view>
    <Rodape></Rodape>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Rodape from './components/Rodape.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Rodape
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
