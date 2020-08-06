import { reactive } from 'vue'

export const enum TodoStatus {
  TODO,
  FINISHED
}

interface Todo {
  id: number
  name: string
  status: TodoStatus
}

export const todoState = reactive({
  todos: new Array<Todo>()
})

export const create = (name: string) => {
  todoState.todos.push({
    id: new Date().getTime(),
    name,
    status: TodoStatus.TODO
  })
}

export const finish = (id: number) => {
  todoState.todos.find(it => it.id === id).status = TodoStatus.FINISHED
}

export const remove = (id: number) => {
  for (let i = 0; i < todoState.todos.length; i++) {
    if (id === todoState.todos[i].id) {
      todoState.todos.splice(i, 1)
      break
    }
  }
}
