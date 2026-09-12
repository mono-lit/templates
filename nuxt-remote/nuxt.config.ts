// https://nuxt.com/docs/api/configuration/nuxt-config

// Dev-server port. Hardcoded here (dev-only knob) rather than read from `.env`.
// Deliberately NOT the host's 7100, so both can run side by side.
const PORT = 7200

export default defineNuxtConfig({
  ignore: [
    '**/sentry.client.ts',
  ],
  ssr: false,
  mono: {
    utils: {},
    helper: {},
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: PORT,
  },
  modules: [
    'mono-utils/nuxt',
    'mono-helper/nuxt',

    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'notivue/nuxt',
  ],

  // No Sentry here: the Host owns error reporting, and this app compiles INTO
  // it. Add `@sentry/nuxt` + a `sentry.client.config.ts` if you want the remote
  // reporting under its own DSN when run standalone.
  sourcemap: false,
  css: [
    // mono-skeleton styles ship in `mono-helper/ui/index.css`, added
    // automatically by the `mono-helper/nuxt` module.
    'notivue/notifications.css',
    'notivue/animations.css',
  ],

  // This app's OWN composables/stores. The host's live under `*/shared/` and are
  // registered by `mono-utils/nuxt` (which now passes the `**` glob for
  // federated dirs too), so these globs only have to cover our own tree — but we
  // keep the same shape as the host so a `shared/` folder added here just works.
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
    // Keep `import.meta.env.MONO_NUXT_REMOTE_*` / `VITE_*` working in mono.config.ts.
    // (server.fs.allow, optimizeDeps.exclude and the __MONO_CONFIG_EXPOSE__
    // define are injected by the `mono-utils/nuxt` module; the monoSsr Vite
    // plugins by the `mono-helper/nuxt` module.)
    envPrefix: ['VITE_', 'MONO_'],
    resolve: {
      // `lit` ships transitively via `mono-helper` and `@lit-labs/ssr`. Dedupe
      // it so mono-helper's externalized shadow build shares ONE lit instance
      // with @lit-labs/ssr / nuxt-ssr-lit (pnpm dedupes naturally; backstop).
      dedupe: ['lit', 'lit-html', 'lit-element', '@lit/reactive-element'],
    },
    // Pre-bundle the deps only reached from FEDERATED code (mono.config.ts,
    // the host's pages, the generated odata service). Without this Vite first
    // discovers them at runtime on the first federated navigation, triggers a
    // mid-session dep re-optimization, and re-fetches mono-helper's chunks under
    // a new `?v=` URL — re-evaluating its `@customElement('mono-nav')` side
    // effect and throwing `'mono-nav' has already been defined`.
    optimizeDeps: {
      include: [
        '@odata2ts/odata-query-objects',
        '@odata2ts/odata-service',
        'mono-devextreme',
      ],
    },
  },

  hooks: {
    // `mono.config.ts` is a root-level config file no Nuxt tsconfig `include`
    // glob matches, so editors type-check it in an inferred project with no
    // alias paths / Vite env types. Attach it to the app project instead.
    'prepare:types'(opts: { tsConfig: { include?: string[] } }) {
      opts.tsConfig.include ||= []
      if (!opts.tsConfig.include.includes('../mono.config.ts')) {
        opts.tsConfig.include.push('../mono.config.ts')
      }
    },
  },
})
