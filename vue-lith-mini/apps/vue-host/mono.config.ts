//@unocss-include
import { defineConfig, type MonoConfig } from '@mono-lit/utility/config'
import { DataSource, ODataStore, CustomStore } from '@mono-lit/devextreme'
import vueRemoteMiniConfig from '@vue-remote-mini-root/mono.config'
import usersSeed from './src/datas/mock/users.json'

const appConfig = {
    // The only auth cookie this template declares: the fake JWT minted at mock
    // login. There is no refresh token — no server to refresh against.
    jwtName: 'MONO_token',
}


export default defineConfig({
    // Activate the mono-vue remote: merges its config (menu `Module One`) into
    // this host — and it is also the switch that turns its sidebar menu on:
    // `use-host-menu-store` gates every synced remote on this list
    // (`resolveExtendsAppNames`). Commenting the entry out drops the menu but
    // keeps the synced clone under `.mono/apps/`. Thunk form for c12's extends
    // chain — the remote extends this config back, and the lazy call is what
    // lets that intentional cycle resolve.
    extends: [
        (): MonoConfig => vueRemoteMiniConfig,
    ],
    name: 'vue-host',
    type: 'vue',
    // This app OWNS the shared shell, so it renders its own `src/layouts` and
    // takes none from the apps it federates -- a remote's `default.vue` must not
    // compete with the shell's. A remote declares 'remote' (or nothing) instead.
    // Never inherited: a remote extending this config does NOT pick up 'host'.
    template: 'host',
    apps: [
        {
            name: 'vue-remote-mini',
            // Mono-lith: read in place from the sibling folder (`path` wins whenever
            // ../vue-remote-mini exists). `url` is the fallback once this app is lifted out.
            path: '../vue-remote-mini',
            url: 'https://github.com/mono-lit/templates/tree/main/vue-remote-mini',
            type: 'vue'
        },
    ],
    // Mock backend: this template ships with NO server. The `users` entity is
    // the mock login's source of truth (login = push `LastLogin` onto the row,
    // see `use-auth-store.ts`). Everything lives in the browser's IndexedDB —
    // no port, no CORS, works offline. `mono db validate` checks the schema.
    // Swapping to a real backend later = repoint the two `fetching.api` urls
    // below; URLs that match no mock base-url go to the network unchanged.
    mockIndexedDB: {
        dbName: 'vue-host-mock',
        version: 1,
        schema: {
            'vue-host-mock': {
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
                url: 'vue-host-mock',
            },
            monoHostOData: {
                type: 'odata',
                url: 'vue-host-mock',
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
