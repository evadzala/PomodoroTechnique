import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import toDoList from '@/components/toDoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'toDoList',
      component: toDoList
    }
  ]
})
