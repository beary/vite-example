import { createRouter, createWebHashHistory } from 'vue-router'

export enum R {
  TODO = 'TODO',
  DONE = 'DONE'
}

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '',
      redirect: { name: R.TODO }
    },
    {
      path: '/todo',
      name: R.TODO,
      component: () => import('./views/Todo.vue')
    },
    {
      path: '/done',
      name: R.DONE,
      component: () => import('./views/Done.vue')
    }
  ]
})
