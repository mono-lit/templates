// https://nuxt.com/docs/api/configuration/nuxt-config
// import { fileURLToPath } from 'node:url'

// Side-effect-free `mono-helper` root: the package's `node` entry exports the
// pure data utilities (monoDataGrid, theme helpers, …) WITHOUT importing any
// custom-element module. The browser `import` entry (dist/index.js) instead
// re-exports every component, whose `@customElement('mono-nav')` decorators
// register tags as an import side effect. See the alias below.
// const monoHelperPureRoot = fileURLToPath(
//   new URL('./node_modules/mono-helper/dist/index.node.js', import.meta.url),
// )

// Dev-server port. Hardcoded here (dev-only knob) rather than read from `.env`.
const PORT = 7100

export default defineNuxtConfig({
  ssr: true, // prerender in prod, dev server is SPA (no SSR)
  // Shared `mono` key: `utils` -> mono-utils/nuxt, `helper` -> mono-helper/nuxt
  // (the latter registers monoSsr() + the base css + the `mono-` isCustomElement).
  mono: {
    // `@mono-host` -> `app/` (and the federated `app/…` ecosystem dirs) are now
    // derived from the top-level `type: 'nuxt'` in mono.config.ts, so the manual
    // `alias: { '@mono-host': { dir: 'app' } }` override is no longer needed.
    utils: {},
    // SSR wrapping is now AUTOMATIC: `mono-helper/nuxt` auto-installs nuxt-ssr-lit
    // (optional peer) and wraps a `<mono-*>` in <LitWrapper> when the .vue file
    // imports its shadow build (`mono-helper/ui/shadow/<c>`); everything else
    // stays client-only. No `litElementPrefix` / `exclude` lists to maintain.
    // (Use `helper: { shadow: ['mono-x'] }` only for tags registered globally in
    // a plugin rather than imported in the using SFC.)
    helper: {},
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: PORT,
  },
  spaLoadingTemplate: 'spa-loading-template.html',
  modules: [
    // `mono-helper/nuxt` auto-installs `nuxt-ssr-lit` (optional peer) and drives
    // the SSR wrap from each .vue file's `mono-helper/ui/shadow/<c>` imports — no
    // manual `nuxt-ssr-lit` entry or `litElementPrefix` list needed.
    'mono-utils/nuxt',
    'mono-helper/nuxt',

    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'notivue/nuxt',
    '@sentry/nuxt/module',
  ],


  // Official Sentry Nuxt SDK. Client init lives in `sentry.client.config.ts`
  // (root); browser tracing + vue-router instrumentation are auto-wired. No
  // `sentry.server.config.ts` because this app is `ssr: false` (SPA).
  // Build-time keys come from `process.env` (mono env loads ALL keys, not just
  // prefixed ones, before config eval). Source-map upload is skipped when
  // `authToken` is undefined — so we gate the WHOLE block on the same
  // `VITE_SENTRY_ENABLED` flag as the runtime init. The flag lives only in
  // `.env` (prod); `.env.dev` lacks it, so `pnpm build:dev` uploads nothing.
  // (`nuxt build` is always a production build, so we can't use NODE_ENV here.)
  sentry: process.env.VITE_SENTRY_ENABLED === 'true'
    ? {
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        telemetry: false,
        sourcemaps: {
          filesToDeleteAfterUpload: ['.output/public/**/*.map'],
        },
      }
    : {
        // Disabled for non-prod builds: no auth token → no source-map upload.
        telemetry: false,
        sourcemaps: { disable: true },
      },
  sourcemap: false,
  css: [
    // mono-skeleton styles now ship in `mono-helper/ui/index.css`
    // (added automatically by the `mono-helper/nuxt` module).
    'notivue/notifications.css',
    'notivue/animations.css',
  ],

  // `mono-helper/nuxt` adds `mono-helper/ui/index.css` and the `mono-`
  // isCustomElement rule (so `<mono-*>` aren't resolved as Vue components).

  // The host nests composables/stores under `*/shared/`; Nuxt (and @pinia/nuxt's
  // storesDirs) only scan the top level + `*/index` by default, so opt the
  // nested dirs in via globs. These paths resolve relative to srcDir (`app/`).
  // NB: @pinia/nuxt's `storesDirs` can't cover this — it resolves each entry
  // against `app/` and only scans one level deep — so we register stores here.
  imports: {
    dirs: ['composables', 'composables/**', 'stores', 'stores/**'],
  },
  dir: {
    middleware: 'app/middleware',
  },

  // Port of the host main.ts createNotivue() options.
  notivue: {
    position: 'top-right',
    pauseOnHover: true,
    avoidDuplicates: true,
    limit: 4,
    notifications: {
      global: {
        duration: 2000,
      },
    },
  },
  vite: {
    // Keep `import.meta.env.MONO_HOST_*` / `VITE_*` working in mono.config.ts.
    // (server.fs.allow, optimizeDeps.exclude and the __MONO_CONFIG_EXPOSE__
    // define are injected by the `mono-utils/nuxt` module; the monoSsr Vite
    // plugins are injected by the `mono-helper/nuxt` module.)
    envPrefix: ['VITE_', 'MONO_'],
    // `lit` is no longer a direct dependency here — it ships transitively via
    // `mono-helper` (its own dependency) and `@lit-labs/ssr`. Dedupe it so
    // mono-helper's externalized shadow build shares ONE lit instance with
    // @lit-labs/ssr / nuxt-ssr-lit (pnpm dedupes naturally; this is a backstop).
    resolve: {
      dedupe: ['lit', 'lit-html', 'lit-element', '@lit/reactive-element'],
      // Map the BARE `mono-helper` specifier (exact, not subpaths) to the
      // side-effect-free utilities entry on the client too. Federated grid
      // stores do `import { monoDataGrid } from 'mono-helper'`; without this the
      // browser barrel registers the LIGHT `mono-nav`/`mono-sidebar`, colliding
      // with the host's already-registered SHADOW builds (app/plugins/mono-
      // shadow.ts) → `NotSupportedError: 'mono-nav' has already been defined` on
      // /master/user and /budget/alokasi. Components are still registered via the
      // explicit `mono-helper/ui/*` subpaths, which this anchored regex leaves
      // untouched.
      // alias: [{ find: /^mono-helper$/, replacement: monoHelperPureRoot }],
    },
    // Pre-bundle the deps that are only reached from FEDERATED routes
    // (mono.config.ts / app.vue / the generated odata service). Without this,
    // Vite first discovers them at runtime on the first visit to a federated
    // page (e.g. /master/user, /budget/alokasi), triggers a mid-session dep
    // re-optimization, bumps the optimize-deps hash, and re-fetches mono-helper's
    // chunks under a NEW `?v=` URL. That re-evaluates `mono-helper`'s nav/sidebar
    // modules a second time, whose `@customElement('mono-nav')` side effect then
    // throws `'mono-nav' has already been defined` against the global registry.
    // Including them upfront keeps the optimize-deps hash stable → no re-eval,
    // no double define. (List comes straight from Vite's 'discovered new
    // dependencies at runtime' hint.)
    optimizeDeps: {
      include: [
        '@odata2ts/odata-query-objects',
        '@odata2ts/odata-service',
        'mono-devextreme',
      ],
    },
  },

  hooks: {
    // `mono.config.ts` is a root-level config file that isn't matched by any of
    // Nuxt's generated tsconfig `include` globs (they only pick up root `*.d.ts`),
    // so editors type-check it in an inferred project with no alias paths / Vite
    // env types — hence 'Cannot find module '@mono-host/...'' and 'Property 'env'
    // does not exist on type 'ImportMeta''. Attach it to the app project, which
    // has the mono aliases + `import.meta.env` typing.
    'prepare:types'(opts: { tsConfig: { include?: string[] } }) {
      opts.tsConfig.include ||= []
      if (!opts.tsConfig.include.includes('../mono.config.ts')) {
        opts.tsConfig.include.push('../mono.config.ts')
      }
    },
  },
  // routeRules: {
  //   '/': { prerender: true },
  //   '/home': { prerender:true },
  //   '/error': { prerender:true }
  // }
})
