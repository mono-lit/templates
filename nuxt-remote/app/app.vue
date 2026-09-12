<script setup lang="ts">
import { Notivue, Notifications, pastelTheme } from 'notivue'
import { MonoNotifAction, monoProvide } from 'mono-utils/runtime'
import { resolveMonoConfig } from 'mono-utils/config'
import config from '../mono.config'

// `useHostMenuStore` is the HOST's store, auto-imported from the federated
// `app/stores/shared/`. Nothing declares it here — that it resolves at all is
// the ecosystem merge working.
const menuStore = useHostMenuStore()

useHead({
  title: () => (menuStore.pageTitle ? `MONO :: ${menuStore.pageTitle}` : 'MONO'),
})

// Publish this app's menu to the host's shell. The host's `layouts/home.vue`
// does the matching `monoInject({ key: 'app:sidebar' })` and pipes it into
// `menuStore.additionalMenu`, so the sidebar shows our pages alongside its own.
//
// This is the same contract mono-vue-remote uses, and it is the path that
// actually works here: the host's `use-host-menu-store` discovers remote menus
// with `import.meta.glob('../../../.mono/apps/**/mono.config.ts')`, a path
// relative to ITS file — which, compiled from inside our clone of it, points at
// `.mono/apps/mono-host/.mono/apps/**` and finds nothing.
const sidebar = ref<any[]>([])

monoProvide({
  key: 'app:sidebar',
  syncRef: sidebar,
  resetOnUnmount: false,
})

onMounted(() => {
  // `defineConfig` is identity — it does NOT resolve `extends`, so `config.menu`
  // is only this app's own entries. Resolve the layers so anything federated is
  // merged in too.
  sidebar.value = resolveMonoConfig(config).menu ?? []
})
</script>

<template>
  <main>
    <Notivue v-slot="item">
      <MonoNotifAction v-if="item.props.isAction" :item="item" />
      <Notifications v-else :item="item" :theme="pastelTheme" />
    </Notivue>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<style>
:root {
  --nv-gap: 1rem;
  --nv-z: 9999999999999999999999999;
  --nv-root-x-align: right;
}

@media (max-width: 768px) {
  :root {
    --nv-root-x-align: center;
  }
}
</style>
