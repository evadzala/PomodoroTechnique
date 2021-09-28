<template>
  <div id="app">
    <headerBar></headerBar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
export default {
  name: 'app',

  components: {
    headerBar
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #2d2c2c;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  text-align: center;
  margin-top: 40px;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
