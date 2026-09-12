//@unocss-include
import { defineConfig, type MonoConfig } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme'
import nuxtRemoteConfig from '@nuxt-remote-root/mono.config'
import usersSeed from './app/datas/mock/users.json'

const appConfig = {
    // The only auth cookie this template declares: the fake JWT minted at mock
    // login. There is no refresh token — no server to refresh against.
    jwtName: 'MONO_token',
}


export default defineConfig({
    // Activate the nuxt-remote: merges its config (menu `Module Nuxt`) into
    // this host — and it is also the switch that turns its sidebar menu on:
    // `use-host-menu-store` gates every synced remote on this list
    // (`resolveExtendsAppNames`). Commenting the entry out drops the menu but
    // keeps the synced clone under `.mono/apps/`. Thunk form for c12's extends
    // chain — the remote extends this config back, and the lazy call is what
    // lets that intentional cycle resolve.
    extends: [
        (): MonoConfig => nuxtRemoteConfig,
    ],
    name: 'nuxt-host',
    // This host is a Nuxt app (source under `app/`). Declared above `apps` so
    // `monoAlias` can read it statically (before the config is loaded).
    type: 'nuxt',
    // This app OWNS the shared shell rather than consuming one, so it must not
    // adopt a remote's. Without this, a `type: 'nuxt'` entry in `apps[]` below
    // would be registered as a native Nuxt layer and its `layouts/`, `app.vue`
    // and plugins would merge into this host - silently, since there is nothing
    // to error on. (Absent reads as `'remote'`, which is right for a remote and
    // wrong here.) Never inherited through `extends`: a remote that extends this
    // config is NOT told it is a host.
    template: 'host',
    apps: [
        {
            name: 'nuxt-remote',
            // Deep-folder sync (mono-utils >= 0.0.2): the URL names the FOLDER
            // — `mono sync` resolves `main` + subdirectory `nuxt-remote` and
            // clones just that folder into `.mono/apps/nuxt-remote`.
            url: 'https://github.com/mono-lit/templates/tree/main/nuxt-remote',
            type: 'nuxt',
            template: 'remote',
        }
    ],
    // Mock backend: this template ships with NO server. The `users` entity is
    // the mock login's source of truth (login = push `LastLogin` onto the row,
    // see `use-auth-store.ts`). Everything lives in the browser's IndexedDB —
    // no port, no CORS, works offline. `mono db validate` checks the schema.
    // Swapping to a real backend later = repoint the two `fetching.api` urls
    // below; URLs that match no mock base-url go to the network unchanged.
    mockIndexedDB: {
        dbName: 'nuxt-host-mock',
        version: 1,
        schema: {
            'mono-host-mock': {
                users: {
                    fields: {
                        Id: 'number|primary',
                        Username: 'string',
                        Name: 'string',
                        LastLogin: 'date',
                    },
                    seed: usersSeed,
                },
            },
        },
    },
    fetching: {
        api: {
            monoHostRest: {
                type: 'restful',
                url: 'mono-host-mock',
            },
            monoHostOData: {
                type: 'odata',
                url: 'mono-host-mock',
            },
        },
        source: {
            dataSource: DataSource,
            oDataStore: ODataStore,
            customStore: CustomStore,
        }
    },
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

    ]
});
