<template lang="pug">
  label.switch
    input(type="checkbox" :checked="isCheck" @click="autoSwitch")
    span.slider.round
</template>

<script>
export default {
  data () {
    return {
      isCheck: false
    }
  },

  methods: {
    autoSwitch () {
      this.isCheck = !this.isCheck
      this.$emit('input', this.isCheck)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 96px;
  height: 26px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFF;
  -webkit-transition: .4s;
  transition: .4s;
  border: 2px solid #C8C9CC;

  display: flex;
  justify-content: center;
  align-items: center;
}

.slider::before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 2px;
  background-color: #C8C9CC;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider::after {
  content: '自動休息';
  font-size: 10px;
  color: #C8C9CC;

  // position: relative
  text-align: center;
}

input:checked + .slider {
  border-color: #07C160;
}
input:checked + .slider:before {
  background-color: #07C160;
}
input:checked + .slider::after {
  color: #07C160;
}

input:checked + .slider:before {
  -webkit-transform: translateX(58px);
  -ms-transform: translateX(58px);
  transform: translateX(72px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>