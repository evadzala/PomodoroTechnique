<template lang="pug">
  .todoList
    .dateTimePicker

    //- 任務大類
    .taskClass
      .eachClass(@click="focusClass = 'all'" :class="{ 'focusOnClass': focusClass === 'all' }")
        span.classTitle 全部
      template(v-for="(item, index) in toDoList")
        .eachClass(@click="focusClass = index" :class="{ 'focusOnClass': focusClass === index }")
          span.classTitle {{ item.class }}
      input.eachClass.newClass(v-model.trim="newClassName" placeholder="add" @keyup.enter="addNewClass" @blur="addNewClass")

    //- 任務列表
    .taskContent
      template(v-for="task in focusClass === 'all' ? allTodoList.items : toDoList[focusClass].items")
        .taskRange
          .taskTitle
            .tomatoIcon(style="width: 16px; height: 16px; margin-right: 8px")
            span {{ task.title }}
          .taskTomatoAmount
            .tomatoIcon(v-for="amount in task.tomatoAmount" style="width: 12px; height: 12px; margin-right: 4px")

      .emptyTaskContent(v-if="allTodoList.items.length === 0 || (focusClass !== 'all' && toDoList[focusClass].items.length === 0)")
        span 暫無任務清單

    //- 新增任務
    .addTask(v-if="focusClass !== 'all'" @click="addNewTask(focusClass)")
      .addTaskButtom
        .tomatoIcon(style="width: 20px; height: 20px; margin-right: 8px")
        span 新增任務
</template>

<script>
export default {
  data () {
    return {
      newClassName: '',
      focusClass: 'all',
      toDoList: [
        // 範例
        // {
        //   class: '運動',
        //   items: [
        //     {
        //       tomatoAmount: 3,
        //       title: '運動3',
        //       status: true,
        //       countdownTime: {
        //         working: 25,
        //         rest: 5
        //       },
        //       dateTime: 'test'
        //     }
        //   ]
        // }
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
    },
    toFocusOnClass (classValue) {
      console.log('classValue', classValue)
      this.focusClass = classValue
    },
    addNewTask (val) {
      console.log('addNewTask', val)
      let newTask = {
        tomatoAmount: 1,
        title: '工作1',
        status: true,
        countdownTime: {
          working: 25,
          rest: 5
        },
        dateTime: 'test'
      }

      this.toDoList[val].items.push(newTask)
    }
  }
}
</script>

<style lang="scss" scoped>
.todoList {
  display: flex;
  flex-direction: column;
  // align-items: center;
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
.focusOnClass {
  background-color: #FF4433;
  color:#fff;
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
  max-height: 450px;
  margin: 0 16px;
  border-radius: 8px;
  background-color: #fff;
  overflow: scroll;
}
.taskRange {
  height: 70px;
  margin: 16px;
  border-bottom: 1px solid #DCDEE0;
}
.taskTitle {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.taskTomatoAmount {
  display: flex;
  margin-bottom: 20px;
}
.smallTomato {
  height: 12px;
  width: 12px;
  margin-left: 4px;
}

.addTask {
  height: 43px;
  margin: 16px;
  background-color: #fff;
  border: 1px solid #DCDEE0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addTaskButtom {
  display: flex;
}
.tomatoIcon {
  border-radius: 50%;
  background-color: #FF4433;
}
</style>