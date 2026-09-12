import { createMono, setMonoEventResolver } from 'mono-utils/runtime'
import { monoConfigureFetching } from 'mono-utils/fetching'
import monoConfig from '@mono-host-root/mono.config'

// Universal port of `app.use(createMono(monoConfig))`. With the isomorphic
// mono-utils, `createMono` -> `initMono` reads cookies on BOTH environments:
// on the client via document.cookie, on the server via the h3 request event. We
// wire the event resolver first so the server path can read the current request's
// cookies and hydrate `monoState()` before render.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    setMonoEventResolver(() => useRequestEvent())
  }

  // Where a request lands when its token is expired and the automatic refresh
  // (fetching.auth.requestRefreshTokenRequest) couldn't save it. It lives here rather
  // than in mono.config.ts because it needs the router.
  if (import.meta.client) {
    const router = useRouter()

    monoConfigureFetching({
      unauthCall: () => {
        router.push('/')
      },
    })
  }

  nuxtApp.vueApp.use(createMono(monoConfig))
})
