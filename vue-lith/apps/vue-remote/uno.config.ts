import { defineConfig, presetWind4, presetIcons } from 'unocss'
import { fileURLToPath } from "node:url";
const monoApps = fileURLToPath(new URL("./.mono/apps", import.meta.url)).replace(/\\/g, "/");


export default defineConfig({
    content: {
        filesystem: [
            `${monoApps}/*/src/**/*.{js,ts,vue,html}`,
            `${monoApps}/*/app/**/*.{js,ts,vue,html}`,
            // Each remote's `mono.config.ts` carries the menu `icon` classes
            // (e.g. `i-mdi-arrow-decision-outline`) rendered in the host sidebar.
            `${monoApps}/*/mono.config.ts`,
        ],
        // The filesystem scan above still runs each file through UnoCSS's `filter`,
        // which only admits a file if its code has `//@unocss-include` OR its id matches
        // this `include`. The default regex covers `.vue/.tsx/...` but NOT plain `.ts`,
        // so federated data modules that hold classes without the comment (e.g.
        // `src/datas/flow.ts`'s node-card colors) get dropped. We keep the exact default
        // regex (so the host's own `app/**` behaves identically) and add a REGEX — not a
        // relative glob, which wouldn't match module ids under Nuxt's Vite — that admits
        // federated `.ts/.js` under `.mono/apps/`. The host's own `.ts` files keep using
        // their `//@unocss-include` comment; this rule is scoped to `.mono/apps` only.
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|marko|html)($|\?)/,
                /[\\/]\.mono[\\/]apps[\\/].*\.(ts|js)($|\?)/,
            ],
        },
    },
    presets: [
        presetWind4({
            preflights: {
                reset: true,
            }
        }),
        presetIcons()
    ],
})