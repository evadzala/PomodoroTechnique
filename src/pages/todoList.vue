<template lang="pug">
  .todoList
    .dateTimePicker
    .taskClass
      .eachClass
        span.classTitle 全部
      template(v-for="(item, key, index) in toDoList")
        .eachClass
          span.classTitle {{ item.class }}
      input.eachClass.newClass(v-model.trim="newClassName" placeholder="add" @keyup.enter="addNewClass" @blur="addNewClass")
    .taskContent
      .contentRange
</template>

<script>
export default {
  data () {
    return {
      newClassName: '',
      inputClass: true,
      toDoList: [
        {
          class: '運動',
          items: [
            {
              tomatoAmount: 1,
              title: '運動1',
              status: true,
              countdownTime: {
                working: 25,
                rest: 5
              },
              dateTime: 'test'
            }
          ]
        },
        {
          class: '工作',
          items: [
            {
              tomatoAmount: 1,
              title: '運動1',
              status: true,
              countdownTime: {
                working: 25,
                rest: 5
              },
              dateTime: 'test'
            }
          ]
        }
      ]
    }
  },

  computed: {
    'allTodoList': function () {
      console.log('allTodoList')
      let allList = { class: '全部', items: [] }
      this.toDoList.forEach(node => {
        allList.items = allList.items.concat(node.items)
      })

      return allList
    }
  },

  methods: {
    classSwitch () {
      this.inputClass = !this.inputClass
    },
    addNewClass () {
      if (this.newClassName !== '') {
        let isExist = this.toDoList.find(node => node.class === this.newClassName)
        if (isExist) {
          alert('大類重複')
        } else {
          let item = {
            class: this.newClassName,
            items: []
          }
          this.toDoList.push(item)
        }
      }

      this.newClassName = ''

      this.classSwitch()
    }
  }
}
</script>

<style lang="scss" scoped>
.todoList {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
}

.dateTimePicker {
  height: 52px;
  width: 100%;
  background-color: fuchsia;
}

.taskClass {
  height: 64px;
  width: 100%;
  overflow: scroll;
  padding-left: 16px;
  display: flex;
  align-items: center;
}
.eachClass {
  height: 32px;
  margin-right: 4px;
  background-color: #fff;
  border: 2px solid #FF4433;
  border-radius: 100px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: horizontal-tb;
}
.classTitle {
  width: max-content;
}
.newClass {
  width: 35px;
}
input.newClass::placeholder {
  color: #565656;
}

.taskContent {
  height: 500px;
  width: 100%;
  margin: 0 16px;
  // padding: 0 25px;
  background-color: indigo;
}
// .contentRange {
//   background-color: gold;
//   height: 250px;
//   width: 100%;
// }
</style>