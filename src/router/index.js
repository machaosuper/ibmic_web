import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import List from '@/views/list'
import Detail from '@/views/detail'
import Editor from '@/views/editor'
import Main from '@/views/main'
import Admin from '@/views/admin'
import CategoryList from '@/views/category/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          redirect: 'home'
        }, {
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'list',
          name: 'List',
          component: List
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/',
          redirect: 'home'
        }, {
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'category/list',
          name: 'CategoryList',
          component: CategoryList
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor
        }
      ]
    },
    {
      path: '*',
      redirect: 'main/home'
    }

  ]
})
