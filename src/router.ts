import { createRouter, createWebHashHistory } from 'vue-router'

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'todo' }
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('./views/Done')
    }
  ]
})
