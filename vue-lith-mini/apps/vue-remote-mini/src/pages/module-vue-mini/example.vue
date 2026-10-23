<script setup lang="ts">
import { monoCookie } from '@mono-lit/utility/runtime'

// `home` is the HOST's layout. A mini ships no layouts, router or App.vue —
// everything around this page comes from the host it runs in.
definePage({
  meta: {
    layout: 'home',
    title: 'Example',
  },
})

const { appName } = useVueMiniHelper()

// The shared login cookie, written by the host's login page.
const cookie = monoCookie().get('MONO_token', true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl font-semibold">Module Vue Mini — Example</h1>

    <p class="text-sm text-gray-600">
      This page lives in <code>vue-remote-mini/src/pages/</code> — a source-only
      remote. It is installed, built and served by the host
      (<code>{{ appName }}</code> is its own composable, auto-imported by the host).
    </p>

    <span class="text-xs text-gray-500">shared login: {{ cookie ? 'present' : 'none' }}</span>
  </div>
</template>
