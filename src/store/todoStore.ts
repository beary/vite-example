import { reactive } from 'vue'

interface Todo {
  id: number
  name: string
}

export const todoStore = reactive({
  id: 0,
  todoList: new Array<Todo>(),
  doneList: new Array<Todo>()
})

export const addTodo = (todo: string) => {
  if (todo.trim() !== '') {
    todoStore.id += 1
    todoStore.todoList.push({
      id: todoStore.id,
      name: todo
    })
  }
}

export const finish = (id: number) => {
  const idx = todoStore.todoList.findIndex(it => it.id === id)
  if (idx !== -1) {
    todoStore.doneList.push({ ...todoStore.todoList[idx] })
    todoStore.todoList.splice(idx, 1)
  }
}

export const remove = (id: number) => {
  const idx = todoStore.doneList.findIndex(it => it.id === id)
  if (idx !== -1) {
    todoStore.doneList.splice(idx, 1)
    if (todoStore.doneList.length === 0) {
      todoStore.id = 0
    }
  }
}
