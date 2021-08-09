import Vue from 'vue'
import Router from 'vue-router'
import introduction from '@/components/introduction'
import email from '@/vue/email'

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
    }
  ]
})
