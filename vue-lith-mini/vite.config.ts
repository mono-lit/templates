import { defineConfig } from 'vite-plus'

// Root runner config (Vite+). The root is not an app: `vp run --filter <app>`
// (see package.json) runs that app's own script with its own framework config.
export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
})
