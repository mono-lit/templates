import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from "unocss";
import { fileURLToPath } from "node:url";

// Federated remotes live OUTSIDE the Nuxt srcDir, under `.mono/apps/` at the PROJECT
// root. Nuxt sets Vite's `root` to srcDir (`app/`), and UnoCSS resolves
// `content.filesystem` globs against that root — so a root-relative `./.mono/apps/**`
// glob resolves to the non-existent `app/.mono/apps` and silently matches nothing
// (that's why the earlier `filesystem`/`pipeline.include` attempts produced no styles).
// Anchoring to an ABSOLUTE base fixes it. Eager filesystem scanning (with watch) puts
// every federated utility class into `uno.css` upfront, so a client-only route like
// `/flow` isn't unstyled on first paint — UnoCSS's transform pipeline would otherwise
// only extract them on-demand.
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
                reset: true
            }
        }),
        // `display`/`vertical-align` are NOT emitted by presetIcons under
        // presetWind4, so a bare icon `<span class="i-mdi-*">` stays `display:inline`
        // and collapses to a 0x0 box (the width/height:1em are ignored on an inline,
        // empty element) — icons render invisibly. `extraProperties` injects them into
        // every generated icon rule so icons paint in any context (incl. slotted into
        // a shadow-DOM component like `mono-button`).
        presetIcons({
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle',
            },
        }),
        presetWebFonts({
            fonts: {
                serif: ['Raleway'],
                sans: ['Open Sans'],
            },
        }),
    ],
});
