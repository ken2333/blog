<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view></router-view>
  </div>
</template>

<script>

  import  Header from './components/Header'
export default {
  name: 'app',
  components: {
      Header
  }
}
</script>

<style scoped>
#header{
  margin-bottom: 20px;
}
</style>
