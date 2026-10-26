//@unocss-include
import { defineConfig } from '@mono-lit/utility/config'

// A MINI remote: source only. No package.json, no nuxt.config, no env, no
// public/ — the host that federates this folder supplies all of it (its
// node_modules, its build, its shell, its config). It cannot install or run
// on its own. Add it to a host's `apps[]` (by `url` or `path`) and run the host.
export default defineConfig({
    name: 'nuxt-remote-mini',
    // Source under `app/`.
    type: 'nuxt',
    // Consumes the host's shell (layouts, auth guards).
    template: 'remote',
    apps: [
        {
            // The host this mini belongs to, by its GitHub url — the same wiring a
            // full remote declares. The host only prepares a mini that names it here
            // (links node_modules, writes the tsconfig): declared on both sides,
            // never assumed. A mono-lith adds `path: '../nuxt-host'` beside the url.
            name: 'nuxt-host',
            // Mono-lith: read in place from the sibling folder (`path` wins whenever
            // ../nuxt-host exists). `url` is the fallback once this app is lifted out.
            path: '../nuxt-host',
            url: 'https://github.com/mono-lit/templates/tree/main/nuxt-host',
            type: 'nuxt',
            template: 'host',
        },
    ],
    // No `extends` back to the host: the host is the controller and already
    // merges this config through ITS `extends`. The host's cookies, jwt
    // and `fetching.api` entries (`monoHostRest` / `monoHostOData`) are the ones
    // in effect, so pages here just use them.
    //
    // Own endpoints, the day this module gets its own service — keys must not
    // collide with the host's:
    // fetching: {
    //     api: {
    //         nuxtMiniOData: { type: 'odata', url: 'https://…/odata' },
    //     },
    // },
    menu: [
        {
            title: 'Module Nuxt Mini',
            url: '/module-nuxt-mini',
            icon: 'i-mdi-nuxt',
            items: [
                { title: 'Example', url: '/example', icon: 'i-mdi-package-variant' },
            ],
        },
    ],
});
