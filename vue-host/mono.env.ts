// Non-secret, environment-specific values (API base URLs, etc.), keyed by
// NODE_ENV. Committed and shared so they don't go missing when a dev forgets to
// push `.env`. SECRETS (GitHub PATs, Sentry token/DSN) stay in `.env` — never here.
//
// Single source of truth: imported by mono.config.ts (fetching) and
// odata2ts.config.ts (codegen). No `@mono-host`/devextreme imports, so it resolves
// in the bare node codegen context too. See docs: repo/env.
import { resolveEnv } from 'mono-utils/config'

export const env = {
    default: {
        MONO_HOST_API_BASE_URL: 'https://dev-ppl-project.phoenix-squad.eu.org',
        MONO_HOST_ODATA_BASE_URL: 'https://dev-ppl-project.phoenix-squad.eu.org/odata',
    },
    // Override when dev/prod diverge (needs NODE_ENV set in the loaded .env):
    // production: { MONO_HOST_API_BASE_URL: 'https://…', MONO_HOST_ODATA_BASE_URL: 'https://…/odata' },
}

/** Flattened active-environment values (`env.default` + the active NODE_ENV block). */
export const appEnv = resolveEnv({ env })
