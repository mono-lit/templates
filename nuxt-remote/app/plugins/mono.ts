import { createMono, setMonoEventResolver } from 'mono-utils/runtime'
import monoConfig from '@nuxt-remote-root/mono.config'

/**
 * This app's mono bootstrap — and the one file that deliberately SHADOWS the
 * host's.
 *
 * `template: 'remote'` merges the host's `app/plugins/` in, and the host ships a
 * `plugins/mono.ts` of its own that calls `createMono(monoConfig)` against
 * `@nuxt-host-root/mono.config`. Inside this app that would initialise mono with
 * the HOST's config — whose `apps`, `menu` and `fetching.api` are not ours — and
 * fight the module's own state-init plugin. `mono-utils/nuxt` resolves that by
 * filename: a federated plugin is skipped when this app ships one of the same
 * name, so simply having this file here is what makes ours the one that runs.
 *
 * Everything below is the host's logic, pointed at `@nuxt-remote-root` instead.
 *
 * Universal port of `app.use(createMono(monoConfig))`. With the isomorphic
 * mono-utils, `createMono` -> `initMono` reads cookies on BOTH environments: on
 * the client via document.cookie, on the server via the h3 request event. We
 * wire the event resolver first so the server path can read the current request's
 * cookies and hydrate `monoState()` before render.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    setMonoEventResolver(() => useRequestEvent())
  }

  nuxtApp.vueApp.use(createMono(monoConfig))
})
