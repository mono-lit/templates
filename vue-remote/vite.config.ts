import { defineConfig, PluginOption } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts-next';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import dotenv from 'dotenv'
import mkcert from 'vite-plugin-mkcert'
import VueRouter from 'vue-router/vite'
import {
  VueRouterAutoImports,
} from 'vue-router/unplugin'
import { unheadVueComposablesImports } from '@unhead/vue'
import { monoRepo } from 'mono-utils/vite'

const PORT = 2020
const HTTPS = false

dotenv.config()

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  // One async call resolves everything: the `monoAlias` map, `mono.config.ts`
  // (incl. its `extends` chain), the extends-active apps, and the client-exposed
  // `__MONO_CONFIG_EXPOSE__`.
  //   - mono.ecosystem(subs) → type-aware remote dir discovery (vue -> `src/<sub>`)
  //   - mono.plugin          → wires resolve.alias / define / server.fs.allow / dep dedup (register LAST)
  const mono = await monoRepo()

  return {
    envPrefix: ['VITE_', 'MONO_'],
    server: {
      port: PORT,
    },
    preview: {
      port: PORT + 1,
    },
    build: {
      minify: true,
      ...(mode == 'development' && {
        outDir: 'dist-dev'
      })
    },
    plugins: [
      VueRouter({
        routesFolder: [
          { src: 'src/pages' },
          // Federated remote pages, type-driven (vue remote -> `src/pages`).
          ...mono.ecosystem('pages'),
        ],
      }),
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['mono-'].some((p) => tag.startsWith(p)),
          },
        }
      }),
      UnoCSS(),
      //@ts-ignore
      HTTPS && mkcert({
        force: true,
        savePath: './cert'
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'pinia',
          unheadVueComposablesImports,
          VueRouterAutoImports
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
          // Federated remote composables/stores, type-driven (vue -> `src/…`).
          ...mono.ecosystem([
            'composables/shared',
            'stores/shared',
            'composables',
          ]),
        ],
        vueTemplate: true,
      }),

      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        dirs: [
          './src/components',
          // Federated remote components, type-driven (vue -> `src/components`).
          ...mono.ecosystem('components'),
        ],
      }),
      Layouts({
        layoutsDirs: [
          ...mono.ecosystem('layouts')
        ],
        defaultLayout: 'default'
      }),

      // ← LAST. Wires `resolve.alias`, `__MONO_CONFIG_EXPOSE__`, `server.fs.allow`
      // and dep dedup from the single config load above.
      mono.plugin,
    ] as PluginOption[],
  }
})
