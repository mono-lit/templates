// Non-secret, environment-specific values (API base URLs, etc.), keyed by
// NODE_ENV. Committed and shared so they don't go missing when a dev forgets to
// push `.env`. SECRETS (GitHub PATs, Sentry token/DSN) stay in `.env` — never here.
//
// EMPTY for now: this remote ships no backend of its own — everything (mock
// API, fetching entries) merges in from the host via `extends`. Fill it in the
// day this app talks to its own service:
//
//   export const env = {
//       default: {
//           MONO_VUE_API_BASE_URL: 'https://api.example.com',
//           MONO_VUE_ODATA_BASE_URL: 'https://api.example.com/odata',
//       },
//   }
import { resolveEnv } from 'mono-utils/config'

export const env = {}

/** Flattened active-environment values (`env.default` + the active NODE_ENV block). */
export const appEnv = resolveEnv({ env })
