import { defineComponent } from 'vue'

interface TodoItemProp {
  name: string
  btnText: string
  onBtnClick: () => void
}

const initProps = {
  name: String,
  btnText: String,
  onBtnClick: Function as any
}

const TodoItem = defineComponent<TodoItemProp>(props => {
  return () => (
    <div class="Box border-0">
      <div class="Box-row d-flex flex-items-center border-0">
        <span class="flex-auto">
          {props.name}
        </span>
        <button onClick={props.onBtnClick} type="button" class="btn btn-sm" name="button">
          {props.btnText}
        </button>
      </div>
    </div>
  )
})

TodoItem.props = initProps

export default TodoItem
