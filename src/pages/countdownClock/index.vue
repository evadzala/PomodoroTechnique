<template lang="pug">
  .countdown-clock
    clock
    
</template>

<script>
import clock from './clock.vue'

export default {
  components: {
    clock
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.outside-circle {
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 50%;
  border: 5px solid black;
  margin: 100px auto;
}

.kedu {
  width: 200px;
  height: 200px;
  position: absolute;
}


</style>