<template>
  <div v-if="todoStore.doneList.length">
    <TodoItem
      v-for="it in todoStore.doneList"
      :key="it.id"
      :name="it.name"
      @confirm="remove(it.id)"
      btn="Delete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from '../components/TodoItem.vue'
import { todoStore, remove } from '../store/todoStore'

export default defineComponent({
  components: { TodoItem },
  setup () {
    return { todoStore, remove }
  }
})
</script>
