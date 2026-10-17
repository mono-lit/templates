import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite-plus'

const dir = (p: string) => fileURLToPath(new URL(p, import.meta.url))

// Root Vite+ config — REPO MANAGEMENT ONLY (vp install / vp run / vp check /
// package picker for `vp dev` etc.). Each template keeps its own framework
// config untouched inside its folder.
//
// The `test` block is the exception: `vp test` runs the federation suite in
// tests/ that guards the host ↔ remote wiring across every template. The
// aliases below mirror each app's generated `.mono/tsconfig.json` paths, but
// pointed at the sibling SOURCE folders — so the suite checks the wiring of
// what is committed, without needing the gitignored `.mono/apps` clones.
export default defineConfig({
  // Templates are picked interactively by `vp dev` / `vp build`
  // (fuzzy picker), or targeted directly: `vp -C nuxt-host dev`.
  test: {
    include: ['tests/**/*.spec.ts'],
    environment: 'node',
    // The templates' mono.config.ts import @mono-lit/devextreme, which imports
    // DevExtreme subpaths like `devextreme/data/data_source`. Those are folders
    // with their own package.json (`module`/`main`) — Vite resolves them, but plain
    // Node ESM refuses folder imports (ERR_UNSUPPORTED_DIR_IMPORT). Let Vite resolve
    // both packages, exactly as the apps' own builds do.
    server: {
      deps: {
        inline: ['@mono-lit/devextreme', 'devextreme'],
      },
    },
  },
  resolve: {
    alias: {
      // nuxt pair (app source lives under app/)
      '@nuxt-host-root': dir('./nuxt-host'),
      '@nuxt-host': dir('./nuxt-host/app'),
      '@nuxt-remote-root': dir('./nuxt-remote'),
      '@nuxt-remote': dir('./nuxt-remote/app'),
      // vue pair (app source lives under src/)
      '@vue-host-root': dir('./vue-host'),
      '@vue-host': dir('./vue-host/src'),
      '@vue-remote-root': dir('./vue-remote'),
      '@vue-remote': dir('./vue-remote/src'),
    },
  },
})
