<template lang="pug">
  div(id="app")
    .headerBar
    main
      router-view
    footerBar
</template>

<script>
import headerBar from '@/components/headerBar'
import footerBar from '@/components/footer'

export default {
  name: 'app',

  components: {
    headerBar,
    footerBar
  }
}
</script>

<style>
body {
  margin: 0;
  background-color:#E5E5E5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.headerBar {
  height: 44px;
  background-color: #FFF;
}
</style>
