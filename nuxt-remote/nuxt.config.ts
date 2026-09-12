// https://nuxt.com/docs/api/configuration/nuxt-config
declare module 'nuxt/schema' {
  interface NuxtConfig {
    'sentry'?: Record<string, unknown>
  }
}

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
  // reporting under its own DSN when run standalone. The cloned host still
  // ships its Sentry plugin, so keep it out of THIS app's typecheck — it is
  // ignored at runtime (see `ignore` above) and typechecked in the host's repo.
  typescript: {
    tsConfig: {
      exclude: [
        '../.mono/apps/*/sentry.client.config.ts',
        '../.mono/apps/*/app/plugins/sentry.client.ts',
      ],
    },
  },
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
    envPrefix: ['VITE_', 'MONO_'],
    optimizeDeps: {
      include: [
        '@odata2ts/odata-query-objects',
        '@odata2ts/odata-service',
      ],
    },
  },

  // hooks: {
  //   // `mono.config.ts` is a root-level config file no Nuxt tsconfig `include`
  //   // glob matches, so editors type-check it in an inferred project with no
  //   // alias paths / Vite env types. Attach it to the app project instead.
  //   'prepare:types'(opts: { tsConfig: { include?: string[] } }) {
  //     opts.tsConfig.include ||= []
  //     if (!opts.tsConfig.include.includes('../mono.config.ts')) {
  //       opts.tsConfig.include.push('../mono.config.ts')
  //     }
  //   },
  // },
})
