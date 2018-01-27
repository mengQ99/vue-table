<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
input, button { margin: 5px 0; max-width: 300px; }
.el-table { margin: 5px 0; }
</style>
