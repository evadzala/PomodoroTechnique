<template lang="pug">
  .container
    .clock
      h1 秒 {{ counter }}
      h1 分:秒 {{ paddingzero(Math.floor(counter/60), 2) }}:{{ paddingzero(counter % 60, 2) }} 
    .control
      button(v-if="status === 'start'" @click="startCount") start
      button(v-else-if="status === 'stop'" @click="stopCount") stop
      div(v-else)
        button(v-if="counter !== 0" @click="continueCount") continue
        button(@click="restart") restart
</template>

<script>
export default {
  data () {
    return {
      // 專注時間與休息時間以秒為單位
      workCounterSetting: 100,
      breaktimeCounterSetting: 5,
      timer: null,

      counter: 0,
      status: 'start'
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      // 進行初始化
      this.counter = this.workCounterSetting
    },

    startCount () {
      this.status = 'stop'
      this.timer = setInterval(this.countDown, 1000)
    },
    stopCount () {
      this.status = null
      if (!this.status) {
        clearInterval(this.timer)
      }
    },
    countDown () {
      // 把時間減一
      this.counter--
      if (this.counter === 0) {
        this.stopCount()
      }
    },
    continueCount () {
      this.status = 'stop'

      this.timer = setInterval(this.countDown, 1000)
    },
    restart () {
      this.status = 'start'

      this.init()
    },
    paddingzero (num, length) {
      return (Array(length).join('0') + num).slice(-length)
    }
  }
}
</script>
