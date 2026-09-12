<script setup lang="ts">
import { monoCookie } from 'mono-utils/runtime'

// `home` is a HOST-owned layout (the host's `app/layouts/home.vue`), merged in
// because `mono.config.ts` declares `template: 'remote'`. This app ships no
// `layouts/` of its own — that it renders with a sidebar and topbar is the
// whole point of the remote.
definePageMeta({
  layout: 'home',
  title: 'Example',
})

// Reads the shared login cookie — the same one the host writes, since both
// configs name `MONO_token`.
const token = monoCookie().get('MONO_token', true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl font-semibold">Module Nuxt — Example</h1>

    <p class="text-sm text-gray-600">
      This page lives in <code>nuxt-remote/app/pages/</code>. Everything around
      it — the sidebar, the topbar, the auth guard that let you in — comes from
      <code>nuxt-host</code>.
    </p>

    <span class="text-xs text-gray-500">shared login: {{ token ? 'present' : 'none' }}</span>
  </div>
</template>
