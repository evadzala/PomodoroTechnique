<template lang="pug">
  .container
    .workClock
      h1 秒 {{ counter }}
      h1 分:秒 {{ paddingzero(Math.floor(counter/60), 2) }}:{{ paddingzero(counter % 60, 2) }}
    .control
      button(v-if="['start', 'workTimeFinish', 'restTimeFinish'].includes(status)" @click="startCount") start
      button(v-else-if="['workTime', 'restTime'].includes(status)" @click="stopCount") stop
      div(v-else)
        button(v-if="counter !== 0" @click="continueCount") continue
        button(@click="restart") restart
</template>

<script>
export default {
  data () {
    return {
      // 專注時間與休息時間以秒為單位
      workCounterSetting: 5,
      restTimeCounterSetting: 2,
      timer: null,

      counter: 0,
      status: null
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      // 進行初始化
      this.status = 'start'
      this.counter = this.workCounterSetting
    },

    // button event
    startCount () {
      if (['start', 'restTimeFinish'].includes(this.status)) {
        this.status = 'workTime'
      } else if (['workTimeFinish'].includes(this.status)) {
        this.status = 'restTime'
      }
      this.timer = setInterval(this.countDown, 1000)
    },
    stopCount () {
      clearInterval(this.timer)

      if (this.status === 'workTime') this.status = 'workStop'
      else if (this.status === 'restTime') this.status = 'restStop'
    },
    continueCount () {
      this.timer = setInterval(this.countDown, 1000)

      if (this.status === 'workStop') this.status = 'workTime'
      else if (this.status === 'restStop') this.status = 'restTime'
    },
    restart () {
      this.init()
    },

    countDown () {
      // 把時間減一
      this.counter--
      if (this.counter === -1) {
        clearInterval(this.timer)

        if (this.status === 'workTime') {
          this.status = 'workTimeFinish'
          this.counter = this.restTimeCounterSetting
        } else if (this.status === 'restTime') {
          this.status = 'restTimeFinish'
          this.counter = this.workCounterSetting
        }
      }
    },
    paddingzero (num, length) {
      return (Array(length).join('0') + num).slice(-length)
    }
  }
}
</script>
