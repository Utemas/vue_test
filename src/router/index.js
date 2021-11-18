import Vue from 'vue'
import Router from 'vue-router'
import introduction from '@/vue/introduction'
import email from '@/vue/email'
import Main from '@/vue/Main'
import Login from '@/vue/Login'
import Notes from '@/vue/notes'
import Database from '@/vue/database'
import NewNotes from '@/vue/newNotes'
import Search from '@/vue/search'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/database',
      name: 'database',
      component: Database
    },
    {
      path: '/newNotes',
      name: 'newNotes',
      component: NewNotes
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
