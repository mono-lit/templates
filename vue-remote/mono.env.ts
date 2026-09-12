// Non-secret, environment-specific values (API base URLs, etc.), keyed by
// NODE_ENV. Committed and shared so they don't go missing when a dev forgets to
// push `.env`. SECRETS (GitHub PATs) stay in `.env` — never here.
//
// Single source of truth: imported by mono.config.ts (fetching) and
// odata2ts.config.ts (codegen). No `@mono-host`/devextreme imports, so it resolves
// in the bare node codegen context too. See docs: repo/env.
import { resolveEnv } from 'mono-utils/config'

export const env = {
    default: {
        MONO_VUE_API_BASE_URL: 'https://api.example.com',
        MONO_VUE_ODATA_BASE_URL: 'https://api.example.com/odata',
    },
    // Override when dev/prod diverge (needs NODE_ENV set in the loaded .env):
    // production: { MONO_VUE_API_BASE_URL: 'https://…', MONO_VUE_ODATA_BASE_URL: 'https://…/odata' },
}

/** Flattened active-environment values (`env.default` + the active NODE_ENV block). */
export const appEnv = resolveEnv({ env })
