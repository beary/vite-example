import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { todoState, TodoStatus } from './store/todoStore'

export default defineComponent(() => {
  return () => (
    <div class="container-sm p-4">
      <div class="Box">
        <div class="Box-body">

          <nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
            <div class="container-lg UnderlineNav-container">
              <div class="UnderlineNav-body">
                <RouterLink class="UnderlineNav-item" to={{ name: 'todo' }}>
                  {() => (
                    <>
                      Todo<span class="Counter">{todoState.todos.filter(it => it.status === TodoStatus.TODO).length}</span>
                    </>
                  )}
                </RouterLink>
                <RouterLink class="UnderlineNav-item" to={{ name: 'done' }}>
                  {() => (
                    <>
                      Done<span class="Counter">{todoState.todos.filter(it => it.status === TodoStatus.FINISHED).length}</span>
                    </>
                  )}
                </RouterLink>
              </div>
            </div>
          </nav>

          <RouterView />

        </div>
      </div>
    </div>
  )
})
