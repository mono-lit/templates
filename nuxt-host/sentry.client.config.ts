import * as Sentry from '@sentry/nuxt'
import { appEnv } from './mono.env'

// Client-side Sentry init for the @sentry/nuxt module. Runs very early in the
// browser (before the Nuxt app). Gated on an explicit `VITE_SENTRY_ENABLED`
// flag (NOT `import.meta.env.PROD`): `nuxt build` is always a production build,
// so `PROD` is `true` for `build:dev` too — only the loaded env file differs.
// The flag lives in `.env` (prod) and is absent from `.env.dev`, so `build:dev`
// skips Sentry. `browserTracingIntegration` is added automatically by
// @sentry/nuxt and wired to the Nuxt vue-router, so we don't pass one manually.
const dsn = import.meta.env.VITE_SENTRY_DSN

if (import.meta.env.VITE_SENTRY_ENABLED === 'true' && dsn) {
  const apiBaseUrl = String(appEnv.MONO_NUXT_HOST_API_BASE_URL ?? '')
  const escape = (url: string) => url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  Sentry.init({
    dsn,
    sendDefaultPii: true,
    integrations: [Sentry.replayIntegration()],
    tracePropagationTargets: [
      window.location.hostname,
      ...(apiBaseUrl ? [new RegExp(`^${escape(apiBaseUrl)}`)] : []),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0,
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })
}
