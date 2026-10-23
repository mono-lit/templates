<script setup lang="ts">
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
  },
  // A remembered dark mode, applied before first paint: the server cannot read localStorage,
  // so without this a dark reload would paint light first.
  script: [
    {
      key: 'mono-color-mode-boot',
      innerHTML: `try{if(localStorage.getItem('MONO_colorMode')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
    },
  ],
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
