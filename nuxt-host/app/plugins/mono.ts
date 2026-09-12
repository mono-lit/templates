import { createMono, setMonoEventResolver } from 'mono-utils/runtime'
import monoConfig from '@nuxt-host-root/mono.config'

// Universal port of `app.use(createMono(monoConfig))`. With the isomorphic
// mono-utils, `createMono` -> `initMono` reads cookies on BOTH environments:
// on the client via document.cookie, on the server via the h3 request event. We
// wire the event resolver first so the server path can read the current request's
// cookies and hydrate `monoState()` before render.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    setMonoEventResolver(() => useRequestEvent())
  }

  nuxtApp.vueApp.use(createMono(monoConfig))
})
