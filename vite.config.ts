import { defineConfig } from 'vite-plus'

// Root Vite+ config — REPO MANAGEMENT ONLY (vp install / vp run / vp check /
// package picker for `vp dev` etc.). Each template keeps its own framework
// config untouched inside its folder.
export default defineConfig({
  // Templates are picked interactively by `vp dev` / `vp build`
  // (fuzzy picker), or targeted directly: `vp -C nuxt-host dev`.
})
