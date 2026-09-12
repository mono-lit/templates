<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notivue, Notifications, pastelTheme } from "notivue"
import { MonoNotifAction } from 'mono-utils/runtime'

const menuStore = useHostMenuStore()


useHead({
  title: () => {
    if (menuStore.pageTitle) {
      return `MONO :: ${menuStore.pageTitle}`
    }
    return 'MONO'
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