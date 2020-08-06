import { defineComponent, ref } from 'vue'
import TodoItem from '../components/TodoItem'
import { todoState, TodoStatus, create, finish } from '../store/todoStore'

export default defineComponent(() => {
  const newTodo = ref('')
  const createTodo = () => {
    if (newTodo.value.trim()) {
      create(newTodo.value.trim())
      newTodo.value = ''
    }
  }

  return () => (
    <>
      {todoState.todos.filter(it => it.status === TodoStatus.TODO).map(it => (
        <TodoItem
          key={it.id}
          name={it.name}
          btnText='Done'
          onBtnClick={() => finish(it.id)} />
      ))}
      <div class="Box-row border-0">
        <div class="input-group pt-2">
          <input
            value={newTodo.value}
            onInput={(e: any) => newTodo.value = e.target.value}
            onKeypress={e => e.key === 'Enter' && createTodo()}
            class="form-control" type="text" placeholder="Todo" />
          <span class="input-group-button">
            <button onClick={createTodo} class="btn btn-primary" type="button" aria-label="Copy to clipboard">
              Add
            </button>
          </span>
        </div>
      </div>
    </>
  )
})
