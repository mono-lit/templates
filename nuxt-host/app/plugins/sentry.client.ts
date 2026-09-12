import * as Sentry from '@sentry/nuxt'
import { monoJwt } from 'mono-utils/runtime'

// Sentry "extras" that need the app context: the Sentry-Pinia bridge (registered
// on the pinia instance @pinia/nuxt created) and `setUser` from the session
// JWT. The `Sentry.init()` itself lives in `sentry.client.config.ts` (root) —
// this plugin runs after init, so the integration + user enrichment apply to
// that client.
export default defineNuxtPlugin((nuxtApp) => {
  // Same gate as `sentry.client.config.ts`: an explicit flag, not `PROD` —
  // `build:dev` is still a production build, so `PROD` can't disable Sentry.
  if (!(import.meta.env.VITE_SENTRY_ENABLED === 'true' && import.meta.env.VITE_SENTRY_DSN)) return

  const pinia = nuxtApp.$pinia as any
  if (pinia?.use) pinia.use(Sentry.createSentryPiniaPlugin())

  // The mock-login payload minted by `createMockJwtHost` — ID / USERNAME / NAME.
  const jwt = monoJwt().cookieDecode<{ ID?: number | string; USERNAME?: string; NAME?: string }>({
    cookie: 'MONO_token',
    splitCookie: true,
  })

  const id = jwt?.ID
  const username = jwt?.USERNAME || jwt?.NAME

  if (id || username) {
    Sentry.setUser({
      id: id ? String(id) : undefined,
      username: username || undefined,
      ip_address: '{{auto}}',
    })
  } else {
    Sentry.setUser(null)
  }
})
