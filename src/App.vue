<template>
  <div
    class="max-w-screen-sm mx-8 sm:mx-auto mt-8 border rounded-lg overflow-hidden"
  >
    <div class="bg-green-500 px-6 py-4 text-white">
      <router-link
        :class="`py-1 px-3 rounded-md text-white font-bold  ${
          route.name === R.TODO ? 'bg-green-600' : ''
        }`"
        :to="{ name: R.TODO }"
      >
        Todo
      </router-link>
      <router-link
        :class="`py-1 px-3 rounded-md text-white font-bold ml-4 ${
          route.name === R.DONE ? 'bg-green-600' : ''
        }`"
        :to="{ name: R.DONE }"
      >
        Done
      </router-link>
    </div>
    <div class="px-6 py-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { R } from './router'

export default defineComponent({
  setup () {
    const route = useRoute()
    return { R, route }
  }
})
</script>
