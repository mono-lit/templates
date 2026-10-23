<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notivue, Notifications, pastelTheme } from "notivue"
import { MonoNotifAction } from '@mono-lit/utility/runtime'
import { useHostColorMode } from './composables/use-host-color-mode'

const menuStore = useHostMenuStore()

// Light / dark, remembered in localStorage (`MONO_colorMode`).
useHostColorMode()

useHead({
  title: () => {
    if (menuStore.pageTitle) {
      return `NoCompany :: ${menuStore.pageTitle}`
    }
    return 'NoCompany'
  }
})
</script>

<template>
  <main>
    <Notivue v-slot="item">
      <MonoNotifAction v-if="item.props.isAction" :item="item" />
      <Notifications v-else :item="item" :theme="pastelTheme" />
    </Notivue>

    <RouterView />
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