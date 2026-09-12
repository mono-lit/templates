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
import VueDevTools from 'vite-plugin-vue-devtools'
import { monoRepo } from 'mono-utils/vite'

const PORT = 7200
const HTTPS = false
dotenv.config()

// https://vite.dev/config/
export default defineConfig(async ({ mode, command }) => {
  const mono = await monoRepo({ command })

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
      VueRouter(mono.pages.options()),
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
      AutoImport(mono.autoImport.options({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'pinia',
          unheadVueComposablesImports,
          VueRouterAutoImports
        ],
      })),
      Components(mono.components.options()),
      Layouts(mono.layouts.options()),
      VueDevTools(),
      mono.vite(),
    ].filter(Boolean) as PluginOption[],
  }
})
