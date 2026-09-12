//@unocss-include
import { defineConfig, type MonoConfig } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme'
import monoHostConfig from '@nuxt-host-root/mono.config'
import appConfig from '@nuxt-remote/datas/appConfig'
import { env, appEnv } from './mono.env'

export default defineConfig({
    name: 'nuxt-remote',
    // This app is a Nuxt app (source under `app/`). Declared above `apps` so
    // `monoAlias` can read it statically, before the config is loaded.
    type: 'nuxt',
    // This app CONSUMES the shared shell rather than owning it. Read by the
    // `mono-utils/nuxt` module: it merges the host's `layouts/` (the chrome),
    // `middleware/` (the auth guards) and `plugins/` on top of this app's own
    // pages. A file we ship ourselves always wins — see `app/plugins/mono.ts`.
    //
    // Never inherited through `extends`: the host below declares no `template`,
    // but if it declared `'host'` and that leaked down, this app would silently
    // render with no shell at all.
    template: 'remote',
    extends: [
        // Pull the HOST's config in (cookies, jwt, fetching.api `monoHostRest` /
        // `monoHostOData`, mock backend) so federated pages resolve the same
        // endpoints. Thunk form — the host extends this config back, and the
        // lazy call is what lets that intentional cycle resolve.
        (): MonoConfig => monoHostConfig,
    ],
    apps: [
        {
            name: 'nuxt-host',
            url: 'https://github.com/mono-lit/templates/tree/main/nuxt-host',
            type: 'nuxt',
            template: 'host',

        },
    ],
    env,
    fetching: {
        api: {
            // Distinct keys from the host's `monoHostRest` / `monoHostOData`,
            // which merge in via `extends` and stay usable from federated pages.
            monoNuxtRest: {
                type: 'restful',
                url: String(appEnv.MONO_NUXT_REMOTE_API_BASE_URL),
            },
            monoNuxtOData: {
                type: 'odata',
                url: String(appEnv.MONO_NUXT_REMOTE_ODATA_BASE_URL),
            },
        },
        source: {
            dataSource: DataSource,
            oDataStore: ODataStore,
            customStore: CustomStore,
        },
    },
    // Same cookie as the host (also merged in via `extends`): the two apps
    // share one login — the mock JWT the host's login page writes.
    cookie: [
        { name: appConfig.jwtName, split: true },
    ],
    jwt: {
        token: { name: appConfig.jwtName, split: true },
    },
    menu: [
        {
            title: 'Module Nuxt',
            url: '/module-nuxt',
            icon: 'i-mdi-nuxt',
            items: [
                { title: 'Example', url: '/example', icon: 'i-mdi-package' },
            ],
        },
    ],
});
