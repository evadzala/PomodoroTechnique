<template lang="pug">
  .headerBar
    .outline(@click="goToOtherPage('todoList')") todoList
    .outline(@click="goToOtherPage('countdownClock')") clock

</template>

<script>
export default {
  name: 'headerBar',

  methods: {
    goToOtherPage (pageName) {
      this.$router.push(pageName)
    }
  }
}
</script>

<style>
.headerBar {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #434343;
	display: flex;
	justify-content: space-between;
  align-items: center;
}

.outline {
  background-color: #f5a623;
	outline: 2px solid #f5a623;
	outline-offset: 2px;
}
</style>