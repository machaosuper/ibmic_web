import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import List from '@/views/list'
import Detail from '@/views/detail'
import Editor from '@/views/editor'
import Main from '@/views/main'
import Admin from '@/views/admin'
import CategoryList from '@/views/category/list'
import userList from '@/views/user/list'
import blogList from '@/views/admin/blog/list'
import About from '@/views/about'

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
          path: 'list/:type',
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
        },
        {
          path: 'about',
          name: 'About',
          component: About
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
          redirect: 'category/list'
        }, {
          path: 'category/list',
          name: 'CategoryList',
          component: CategoryList
        },
        {
          path: 'user/list',
          name: 'userList',
          component: userList
        },
        {
          path: 'blog/list',
          name: 'blogList',
          component: blogList
        }
      ]
    },
    {
      path: '*',
      redirect: 'main/home'
    }

  ]
})
