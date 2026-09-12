//@unocss-include
import { defineConfig, type MonoConfig } from 'mono-utils/config'
import monoHostConfig from '@vue-host-root/mono.config'
import appConfig from '@vue-host/datas/appConfig'

export default defineConfig({
    name: 'mono-vue',
    type: 'vue',
    extends: [
        // Pull the HOST's config in (cookies, jwt, mock backend, fetching.api
        // `monoHostRest` / `monoHostOData`) so federated pages resolve the same
        // endpoints. Thunk form — the host extends this config back, and the
        // lazy call is what lets that intentional cycle resolve.
        (): MonoConfig => monoHostConfig,
    ],
    apps: [
        {
            name: 'mono-host',
            // Deep-folder sync (mono-utils >= 0.0.2): the URL names the FOLDER
            // — `mono sync` resolves `main` + subdirectory `vue-host` and
            // clones just that folder into `.mono/apps/mono-host`.
            url: 'https://github.com/mono-lit/templates/tree/main/vue-host',
            type: 'vue'
        }
    ],
    // This remote ships NO backend of its own. Everything it needs — the mock
    // IndexedDB schema, the `monoHostRest` / `monoHostOData` api entries and
    // the fetching source ctors — merges in from the host via `extends`, so
    // pages here just call `configBaseUrl: 'monoHostOData'`. Declare a
    // `fetching.api` block of your own the day this app talks to its own
    // service; its keys sit alongside the host's and never collide.
    // Same cookie as the host (also merged in via `extends`): the two apps
    // share one login — the mock JWT the host's login page writes.
    cookie: [
        {
            name: appConfig.jwtName,
            split: true,
        },
    ],
    jwt: {
        token: {
            name: appConfig.jwtName,
            split: true,
        },
    },
    menu: [
        {
            title: 'Module One',
            url: '/module-one',
            icon: 'i-mdi-webpack',
            items: [
                {
                    title: 'Example',
                    url: '/example',
                    icon: 'i-mdi-package'
                }
            ]
        },

    ]
});
