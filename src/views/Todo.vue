<template>
  <div>
    <div v-for="it in todoStore.todoList" :key="it.id">
      {{ it.name }}
    </div>
  </div>
  <div class="flex rounded-md">
    <input
      type="text"
      class="border rounded-none rounded-l-md px-2 py-1 flex-1 focus:outline-none"
      placeholder="todo"
      v-model.trim="todo"
    />
    <button
      class="border rounded-none rounded-r-md px-4 border-green-600 bg-green-600 text-white"
      @click="addTodo(todo)"
    >
      Add
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { addTodo, todoStore } from '../store/todoStore'

export default defineComponent({
  setup () {
    const todo = ref('')
    return {
      todo,
      todoStore,
      addTodo
    }
  }
})
</script>
