<template lang="pug">
  .footer
    .footerBar
      template(v-for="item in pageList")
        .page-buttoms
          .buttom(@click="goToOtherPage(item.path)")
          span.buttom-name {{ item.name }}
    .bottomSpace
</template>

<script>
export default {
  name: 'headerBar',

  data () {
    return {
      pageList: [
        { path: 'countdownClock', name: '歷史統計' },
        { path: 'todoList', name: '今日總攬' },
        { path: 'countdownClock', name: '番茄鐘' },
        { path: 'todoList', name: '任務清單' },
        { path: 'setting', name: '個人設定' }
      ]
    }
  },

  methods: {
    goToOtherPage (pageName) {
      if (this.$route.name !== pageName) this.$router.push(pageName)
    }
  }
}
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
}

.footerBar {
  background-color: #fff;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.page-buttoms {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-buttoms:hover {
  .buttom {
    background-color: #FF4433;
  }

  .buttom-name {
    color: #FF4433;
  }
}
.buttom {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #969799;
}
.buttom:nth-child(even) {
  width: 100px;
  height: 100px;
  background-color: #FF4433;
}
.buttom-name {
  color: #969799;
  font-size: .7rem;
  top: 2px;
  margin: 8px;
}

.bottomSpace {
  background-color: #fff;
  height: 30%;
  width: 100%;
}
</style>