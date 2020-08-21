import { defineComponent } from 'vue'
import { RouterView,   useRoute } from 'vue-router'
import { todoState, TodoStatus } from './store/todoStore'
import { __HREF__, RN } from './router'

export default defineComponent(() => {
  const r = useRoute()
  return () => (
    <div class="container-sm p-4">
      <div class="Box">
        <div class="Box-body">

          <nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
            <div class="container-lg UnderlineNav-container">
              <div class="UnderlineNav-body">
                <a class="UnderlineNav-item" aria-current={r.name === RN.TODO} href={__HREF__({name: RN.TODO})}>
                  Todo
                  <span class="Counter">
                    {todoState.todos.filter(it => it.status === TodoStatus.TODO).length}
                  </span>
                </a>
                <a class="UnderlineNav-item" aria-current={r.name === RN.DONE} href={__HREF__({name: RN.DONE})}>
                  Done
                  <span class="Counter">
                    {todoState.todos.filter(it => it.status === TodoStatus.FINISHED).length}
                  </span>
                </a>
              </div>
            </div>
          </nav>

          <RouterView />

        </div>
      </div>
    </div>
  )
})
