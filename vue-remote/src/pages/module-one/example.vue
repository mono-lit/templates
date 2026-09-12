<script setup lang="ts">
import { ref } from 'vue'
import { monoProvide, monoCookie } from 'mono-utils/runtime'

definePage({
  meta: {
    layout: 'home',
    title: 'Example'
  }
})

const user = ref<any[]>([])

monoProvide({
  key: 'user:send',
  syncRef: user,
  immediate: false,
  resetOnUnmount: false,
})

const kirimDataKeHost = () => {
  user.value = [
    {
      name: 'User 1',
    },
  ]
}

// Reads the shared login cookie — the same one the host writes, since both
// configs name `MONO_token`.
const cookie = monoCookie().get('MONO_token', true)
</script>
<template>
  <div>
    Ini di dalam kamar, update

    <button @click="kirimDataKeHost()">
      Tombolll
    </button>

    <span class="text-xs text-gray-500">shared login: {{ cookie ? 'present' : 'none' }}</span>
  </div>
</template>
