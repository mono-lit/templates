<script setup lang="ts">
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

// Full-screen splash: rendered on the server (visible on first paint) and
// removed once the app has hydrated / the initial page's Suspense resolves.
const nuxtApp = useNuxtApp()
const appLoading = ref(true)
const hideLoader = () => { appLoading.value = false }

nuxtApp.hook('app:suspense:resolve', hideLoader)
// Fallback in case the hook already fired (fast navigations / no async setup).
onMounted(() => requestAnimationFrame(hideLoader))
</script>

<template>
  <main>
    <!-- <Transition name="app-loader-fade">
      <AppLoader v-if="appLoading" />
    </Transition> -->
   <!--
    <UtilsCookieExp />
   -->
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
/* Splash fade-out once the app is hydrated. */
.app-loader-fade-leave-active {
  transition: opacity 0.45s ease;
}
.app-loader-fade-leave-to {
  opacity: 0;
}

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
