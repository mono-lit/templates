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
    // Federates nothing itself (a mini is never anyone's host).
    apps: [],
    // No `extends` / `apps[]` back to the host: the host is the controller and
    // already merges this config through ITS `extends`. The host's cookies, jwt
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
