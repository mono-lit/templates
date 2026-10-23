//@unocss-include
import { defineConfig } from '@mono-lit/utility/config'

// A MINI remote: source only. No package.json, no vite.config, no index.html /
// main.ts / router, no env, no public/ — the host that federates this folder
// supplies all of it (its node_modules, its build, its shell, its config). It
// cannot install or run on its own. Add it to a host's `apps[]` (by `url` or
// `path`) and run the host.
export default defineConfig({
    name: 'vue-remote-mini',
    // Source under `src/`.
    type: 'vue',
    // Consumes the host's shell (layouts).
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
    //         vueMiniOData: { type: 'odata', url: 'https://…/odata' },
    //     },
    // },
    menu: [
        {
            title: 'Module Vue Mini',
            url: '/module-vue-mini',
            icon: 'i-mdi-vuejs',
            items: [
                { title: 'Example', url: '/example', icon: 'i-mdi-package-variant' },
            ],
        },
    ],
});
