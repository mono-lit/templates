// The federated remote (mono-vue) pages use unplugin-vue-router's `definePage`
// macro. The host-nuxt module rewrites `definePage({ meta })` -> `definePageMeta`
// at build time, but the editor / vue-tsc still sees `definePage(...)` in the
// remote `.vue` sources — declare it globally so they don't error.
// (Non-module .d.ts: no import/export, so this is an ambient global declaration.)
declare function definePage(options: {
  meta?: Record<string, any>
  name?: string
  path?: string
  [key: string]: any
}): void
