import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/countdownClock',
      name: 'countdownClock',
      component: () => import('@/pages/countdownClock')
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: () => import('@/pages/todoList')
    }
  ]
})
