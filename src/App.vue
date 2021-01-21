<template>
  <div
    class="max-w-screen-sm mx-8 sm:mx-auto mt-8 border rounded-lg overflow-hidden"
  >
    <div class="bg-green-500 px-6 py-4 text-white flex justify-between">
      <div>
        <router-link
          :class="`py-1 px-3 rounded-md text-white font-bold select-none ${
            route.name === R.TODO ? 'bg-green-600' : ''
          }`"
          :to="{ name: R.TODO }"
        >
          Todo
        </router-link>
        <router-link
          :class="`py-1 px-3 rounded-md text-white font-bold select-none ml-4 ${
            route.name === R.DONE ? 'bg-green-600' : ''
          }`"
          :to="{ name: R.DONE }"
        >
          Done
        </router-link>
      </div>
      <div class="flex">
        <div v-if="todoStore.todoList.length" class="flex items-center mr-4">
          <svg class="w-5 inline-block fill-current" viewBox="0 0 24 24">
            <path :d="mdiCheckCircleOutline" />
          </svg>
          <span class="ml-1">{{ todoStore.todoList.length }}</span>
        </div>

        <div v-if="todoStore.doneList.length" class="flex items-center">
          <svg class="w-5 inline-block fill-current" viewBox="0 0 24 24">
            <path :d="mdiCheckCircle" />
          </svg>
          <span class="ml-1">{{ todoStore.doneList.length }}</span>
        </div>
      </div>
    </div>
    <div class="px-6 py-4 transition-all duration-300">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { mdiCheckCircle, mdiCheckCircleOutline } from '@mdi/js'
import { R } from './router'
import { todoStore } from './store/todoStore'

export default defineComponent({
  setup () {
    const route = useRoute()
    return { R, route, todoStore, mdiCheckCircle, mdiCheckCircleOutline }
  }
})
</script>
