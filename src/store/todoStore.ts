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
