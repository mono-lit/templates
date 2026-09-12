<script setup lang="ts">
import { Notivue, Notification } from 'notivue'
import config from '../mono.config'
import { monoProvide } from 'mono-utils/runtime'
import { resolveMonoConfig } from 'mono-utils/config'
// const FloatMenu = defineAsyncComponent(() => import('./components/Utils/FedsMenu.vue'))

const sidebar = ref<any[]>([])

monoProvide({
  key: 'app:sidebar',
  syncRef: sidebar,

  resetOnUnmount: false,
})

onMounted(() => {
  // `defineConfig` is identity — it does NOT resolve `extends`, so `config.menu`
  // is only this app's own entries. Resolve the extends layers (mono-host,
  // my-memo) so federated menu items (e.g. Memo) are merged in (deduped by title).
  sidebar.value = resolveMonoConfig(config).menu ?? []
})
</script>
<template>
  <div>
    <div>
      <Notivue v-slot="item">
        <Notification :item="item" />
      </Notivue>
      <RouterView />
    </div>
  </div>
</template>
<style>
:root {
  --nv-gap: 1rem;
  --nv-z: 99999999999999999999999999;
}

/* Rules for mobile devices */
@media (max-width: 768px) {
  :root {
    --nv-gap: 0.5rem;
  }
}
</style>