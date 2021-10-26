<template lang="pug">
  .countdown-clock
    //- 切換開關
    .switch-zone
      countdown-auto-switch.switch-position
    //- 倒數器
    .countdown-clock-device
      .workClock
        h1.countdown-clock-font {{ paddingzero(Math.floor(counter/60), 2) }}:{{ paddingzero(counter % 60, 2) }}
    //- 下拉選單
    .toDOList
      .toDOList-select-outside
        select.toDOList-select-inside
          option 123
          option 234
          option 345
          option 456
          option 567
    //- 控制按鈕
    .control
      button.buttom.big(v-if="['start', 'workTimeFinish', 'restTimeFinish'].includes(status)" @click="startCount") 開始專注
      button.buttom.big(v-else-if="['workTime', 'restTime'].includes(status)" @click="stopCount") 暫停
      div(v-else)
        button.buttom.right(v-if="counter !== 0" @click="continueCount") 繼續
        button.buttom.left(@click="restart") 停止
</template>

<script>
import countdownAutoSwitch from './countdownAutoSwitch.vue'
export default {
  components: {
    countdownAutoSwitch
  },
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

    // other function
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

<style lang="scss" scoped>
.countdown-clock {
  padding: 16px;
}
// 切換開關
.switch-zone {
  background-color: brown;
  position: relative;
}
.switch-position {
  position: relative;
  float: right;
  right: 0;
}

// 倒數器
.countdown-clock-device {
  display: flex;
  justify-content: center;
  margin-top: 75px;
  padding: 16px;
}
.workClock {
  background-color: #fff;
  height: 255px;
  width: 255px;
  border: solid 4px #323233;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.countdown-clock-font {
  font-size: 60px;
}

// 下拉選單
.toDOList-select-inside {
  height: 48px;
  width: 100%;
  border: none;
  background-color: #fff;
  margin: 16px 0;
}

// 控制按鈕
.buttom {
  height: 52px;
  background-color: #FF4433;
  border-radius: 100px;
  color: #fff;
  border: none;
  font-size: 1.14rem;
}
.big {
  width: 100%;
}

.right {
  width: calc(65% - 8px);
  position: relative;
  float: right;
  right: 0;
}
.left {
  background-color: #FFF;
  border: 2px solid #FF4433 ;
  color: #FF4433;

  width: 35%;
  left: 0;
}
</style>