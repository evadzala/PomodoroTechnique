<template lang="pug">
  .toDoList
    h1.title to do list
    .inputComponent
      input.border.inputBorder(type="text" v-model="content" placeholder="請輸入" @keyup.enter="addItem")
      input.inputButton(type="button" value="ADD" @click="addItem")
      

    .contentList
      .cell(v-for="(item, index) in notCompleteList" :key="index")
        .cellFront
          input.border(type="checkbox" :checked='item.isComplete' @click="doCheck(item, index)")
          label {{ item.content }}
        span.delete(@click="deleteItem(item)") Delete
</template>

<script>
export default {
  name: 'todoList',
  data () {
    return {
      content: '',
      toDoList: []
    }
  },

  computed: {
    isCompleteList () {
      return this.toDoList.filter(node => node.isComplete)
    },
    notCompleteList () {
      return this.toDoList.filter(node => !node.isComplete)
    }
  },

  methods: {
    addItem () {
      if (this.content !== '') {
        this.toDoList.push(
          {
            index: this.toDoList.length + 1,
            content: this.content,
            isComplete: false
          }
        )
      }
      this.content = ''
    },
    doCheck (data, index) {
      console.log('index', index)
      console.log('data', data)
    },
    deleteItem (item) {
      let testList = this.toDoList.filter(node => item.index !== node.index)
      this.toDoList = testList
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
  /* color: #f5a623; */
}

.inputComponent {
  margin: 0 10%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
}

.inputBorder {
  border-radius: 8px;
  width: 70%;
  height: 25px;
  font-size: 1.15rem;
}

.inputBorder:focus {
  outline: none;
}

.inputButton {
  background-color: #f5a623;
  width: 20%;
  border-radius: 20px;
}

.contentList {
  margin: 20px 10%;
  max-width: 375px;
}

.cell {
  text-align: initial;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 1.15rem;
}

.delete {
  color: #f5a623;
}

a {
  color: #35495E;
}
</style>
