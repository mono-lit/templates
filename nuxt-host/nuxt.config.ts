// https://nuxt.com/docs/api/configuration/nuxt-config
// import { fileURLToPath } from 'node:url'

// Side-effect-free `@mono-lit/helper` root: the package's `node` entry exports the
// pure data utilities (monoDataGrid, theme helpers, …) WITHOUT importing any
// custom-element module. The browser `import` entry (dist/index.js) instead
// re-exports every component, whose `@customElement('mono-nav')` decorators
// register tags as an import side effect. See the alias below.
// const monoHelperPureRoot = fileURLToPath(
//   new URL('./node_modules/@mono-lit/helper/dist/index.node.js', import.meta.url),
// )

// Dev-server port: `PORT` from the loaded .env / .env.dev (hosts 7100, remotes 7101).
const PORT = Number(process.env.PORT) || 7100

export default defineNuxtConfig({
  ssr: true, // prerender in prod, dev server is SPA (no SSR)
  // Shared `mono` key: `utils` -> @mono-lit/utility/nuxt, `helper` -> @mono-lit/helper/nuxt
  // (the latter registers monoSsr() + the base css + the `mono-` isCustomElement).
  mono: {
    utils: {},
    // SSR wrapping is now AUTOMATIC: `@mono-lit/helper/nuxt` installs its built-in Lit SSR
    // bridge (nothing to add to the app) and wraps a `<mono-*>` in <LitWrapper> when the .vue file
    // imports its shadow build (`@mono-lit/helper/ui/shadow/<c>`); everything else
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
  app: {
    head: {
      // The theme, for good: Basecoat colours (light + dark values) on the Vega flavor.
      // Dark mode is only `dark` on <html> (composables/use-host-color-mode.ts).
      bodyAttrs: { class: 'theme-color-basecoat theme-vega' },
    },
  },
  modules: [
    // `@mono-lit/helper/nuxt` brings its own Lit SSR bridge and drives the SSR wrap
    // from each .vue file's `@mono-lit/helper/ui/shadow/<c>` imports — no `nuxt-ssr-lit`
    // module entry or `litElementPrefix` list needed.
    '@mono-lit/utility/nuxt',
    '@mono-lit/helper/nuxt',

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
    // mono's base, then the Vega flavor. Listed here so Vega loads after the base
    // (`@mono-lit/helper/nuxt` only adds the base when it is missing from this list).
    '@mono-lit/helper/ui/index.css',
    '@mono-lit/helper/ui/theme/vega.css',
    'notivue/notifications.css',
    'notivue/animations.css',
  ],
  imports: {
    dirs: ['composables', 'composables/**', 'stores', 'stores/**'],
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
    // define are injected by the `@mono-lit/utility/nuxt` module; the monoSsr Vite
    // plugins are injected by the `@mono-lit/helper/nuxt` module.)
    envPrefix: ['VITE_', 'MONO_'],
    ssr: {
      // @mono-lit/devextreme imports DevExtreme folders (`devextreme/data/data_source`),
      // which Node's ESM loader rejects (ERR_UNSUPPORTED_DIR_IMPORT) when SSR
      // externalizes them. Bundling both lets Vite resolve the folder imports.
      noExternal: ['@mono-lit/devextreme', 'devextreme'],
    },
  },

  // hooks: {
  //   // `mono.config.ts` is a root-level config file that isn't matched by any of
  //   // Nuxt's generated tsconfig `include` globs (they only pick up root `*.d.ts`),
  //   // so editors type-check it in an inferred project with no alias paths / Vite
  //   // env types — hence 'Cannot find module '@nuxt-host/...'' and 'Property 'env'
  //   // does not exist on type 'ImportMeta''. Attach it to the app project, which
  //   // has the mono aliases + `import.meta.env` typing.
  //   'prepare:types'(opts: { tsConfig: { include?: string[] } }) {
  //     opts.tsConfig.include ||= []
  //     if (!opts.tsConfig.include.includes('../mono.config.ts')) {
  //       opts.tsConfig.include.push('../mono.config.ts')
  //     }
  //   },
  // },
})
