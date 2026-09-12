// Non-secret, environment-specific values (API base URLs, etc.), keyed by
// NODE_ENV. Committed and shared so they don't go missing when a dev forgets to
// push `.env`. SECRETS (GitHub PATs, Sentry token/DSN) stay in `.env` — never here.
//
// EMPTY for now: this template ships no backend — the demo runs on the mock
// IndexedDB (see `mockIndexedDB` in mono.config.ts, urls inline). Fill it in
// the day a real backend exists and point `fetching.api` at the values:
//
//   export const env = {
//       default: {
//           MONO_HOST_API_BASE_URL: 'https://api.example.com',
//           MONO_HOST_ODATA_BASE_URL: 'https://api.example.com/odata',
//       },
//   }
import { resolveEnv } from 'mono-utils/config'

export const env = {
    default: {

    }
}

/** Flattened active-environment values (`env.default` + the active NODE_ENV block). */
export const appEnv = resolveEnv({ env })
