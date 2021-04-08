import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/todoapp',
    name: 'TodoApp',
    component: () => import('../views/Todoapp.vue')
  },
  {
    path: '/null1',
    name: 'Resources',
    component: () => import('../views/Null1.vue')
  },
  {
    path: '/null2',
    name: 'Node.js',
    component: () => import('../views/Null2.vue')
  },
  {
    path: '/null3',
    name: 'Svelte',
    component: () => import('../views/Null3.vue')
  },
  {
    path: '/null4',
    name: 'Ionic',
    component: () => import('../views/Null4.vue')
  },
  {
    path: '/null5',
    name: 'Polymer',
    component: () => import('../views/Null5.vue')
  },
  {
    path: '/null6',
    name: 'Flow',
    component: () => import('../views/Null6.vue')
  },
  {
    path: '/null7',
    name: 'Electron',
    component: () => import('../views/Null7.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
