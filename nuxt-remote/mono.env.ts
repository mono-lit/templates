// Non-secret, environment-specific values (API base URLs, etc.), keyed by
// NODE_ENV. Committed and shared so they don't go missing when a dev forgets to
// push `.env`. SECRETS (GitHub PATs, Sentry token/DSN) stay in `.env` — never here.
import { resolveEnv } from 'mono-utils/config'

export const env = {
    default: {

    },
    // Override when dev/prod diverge (needs NODE_ENV set in the loaded .env):
    // production: { MONO_NUXT_REMOTE_API_BASE_URL: 'https://…', MONO_NUXT_REMOTE_ODATA_BASE_URL: 'https://…/odata' },
}

/** Flattened active-environment values (`env.default` + the active NODE_ENV block). */
export const appEnv = resolveEnv({ env })
