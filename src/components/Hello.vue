<template lang="pug">
  .toDoList
    h1 to do list
    .inputComponent
      input.inputBorder(type="text" v-model="content" placeholder="請輸入" @keyup.enter="addItem")
    .contentList
      .cell(v-for="(item, index) in notCompleteList" :key="index")
        input(type="checkbox" :checked='item.isComplete' @click="doCheck(item, index)")
        label {{ item.content }}
    
    //- h1 complete list
    //- div.contentList
    //-   div.cell(v-for="(item, index) in isCompleteList" :key='index')
    //-     input(type="checkbox" :checked='item.isComplete' @click="doCheck(item, index)")
    //-     label {{ item.content}}
    
    

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      content: '',
      toDoList: [
        { index: 1, content: 'test1', isComplete: false },
        { index: 2, content: 'test2', isComplete: true },
        { index: 3, content: 'test3', isComplete: false },
        { index: 4, content: 'test4', isComplete: true },
        { index: 5, content: 'test5', isComplete: false }
      ]
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
      // data.isComplete = !data.isComplete
      // this.toDoList.fill(data, )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.contentList {
  background-color: #442556;
  margin: 0px 10%;
  max-width: 375px;
}

.inputBorder {
  border-color: #f5a623;
  width: auto;
}

.cell {
  text-align: initial;
  display: flex;
}

a {
  color: #35495E;
}
</style>
