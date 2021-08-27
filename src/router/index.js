import Vue from 'vue'
import Router from 'vue-router'
import introduction from '@/vue/introduction'
import email from '@/vue/email'
import Main from '@/vue/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/email',
      name: 'email',
      component: email
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
