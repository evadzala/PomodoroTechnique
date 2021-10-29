<template lang="pug">
  .todoList
    .dateTimePicker
    .taskClass
      template(v-for="(item, key, index) in toDoList")
        .eachClass
          span {{ key }}
      .eachClass(v-if="inputClass" @click="addNewClass") add
      input.eachClass.newClass(v-else v-model="newClassName")
    .taskContent
      template
</template>

<script>
export default {
  data () {
    return {
      newClassName: '',
      inputClass: true,
      toDoList: {
        '全部': [
          {
            tomatoAmount: 1,
            title: 'task1',
            status: true,
            content: '內容1',
            dateTime: 'test'
          },
          {
            tomatoAmount: 2,
            title: 'task2',
            status: false,
            content: '內容2',
            dateTime: 'test'
          },
          {
            tomatoAmount: 3,
            title: 'task2',
            status: false,
            content: '內容2',
            dateTime: 'test'
          }
        ],
        '運動': [
          {
            tomatoAmount: 1,
            title: '運動1',
            status: true,
            content: '內容1',
            dateTime: 'test'
          },
          {
            tomatoAmount: 1,
            title: '運動2',
            status: false,
            content: '內容2',
            dateTime: 'test'
          }
        ]
        // '運動1': [],
        // '運動2': []
        // '運動3': []
        // '運動4': [],
        // '運動5': [],
        // '運動6': [],
        // '運動7': [],
        // '運動8': [],
        // '運動9': [],
        // '運動10': []
      }
    }
  },
  methods: {
    addNewClass () {
      // this.toDoList
      this.inputClass = !this.inputClass
    }
  }
}
</script>

<style lang="scss" scoped>
.todoList {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: 2px solid #FF4433;
  border-radius: 100px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: horizontal-tb;
}
.newClass {
  width: 35px;
}

.taskContent {
  height: 500px;
  width: 100%;
  margin: 0 16px;
  background-color: indigo;
}
</style>