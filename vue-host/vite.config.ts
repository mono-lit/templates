import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import VueRouter from 'vue-router/vite'
import {
    VueRouterAutoImports,
} from 'vue-router/unplugin'
import UnoCSS from "unocss/vite"
import Layouts from 'vite-plugin-vue-layouts-next'
import dotenv from 'dotenv'
import { unheadVueComposablesImports } from '@unhead/vue'
import { sentryVitePlugin } from "@sentry/vite-plugin"
import { monoRepo } from 'mono-utils/vite'

dotenv.config();

const IS_SENTRY = Boolean(process.env.VITE_SENTRY_DSN)

// Dev-server port. Hardcoded here (dev-only knob) rather than read from `.env`.
const PORT = 7100

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
            sourcemap: Boolean(IS_SENTRY),
            ...(mode == 'development' && {
                outDir: 'dist-dev',
            })
        },
        plugins: [
            VueRouter(mono.pages.options()),
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) =>
                            ['dx-', 'mono-'].some((p) => tag.startsWith(p)),
                    },
                }
            }),
            vueDevTools(),
            UnoCSS(),
            AutoImport(mono.autoImport.options({
                imports: [
                    "vue",
                    "vue-router",
                    "@vueuse/core",
                    "pinia",
                    VueRouterAutoImports,
                    unheadVueComposablesImports
                ],
            })),
            Components(mono.components.options()),
            Layouts(mono.layouts.options()),
            (IS_SENTRY) && sentryVitePlugin({
                org: process.env.SENTRY_ORG,
                project: process.env.SENTRY_PROJECT,
                authToken: process.env.SENTRY_AUTH_TOKEN,
                sourcemaps: {
                    filesToDeleteAfterUpload: ['**/*.js.map']
                }
            }),

            mono.vite(),
        ].filter(Boolean) as PluginOption[],

    }
})
