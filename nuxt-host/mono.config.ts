//@unocss-include
import { defineConfig } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme'
import { DefaultService } from '@nuxt-host/odata/DTO/DefaultService'
import { env, appEnv } from './mono.env'

const appConfig = {
    jwtName: 'MONO_token',
    jwtRefreshName: 'MONO_tokenRefresh',
}


export default defineConfig({
    // Federate the mono-vue remote: merge its config (fetching.api myRest/myOdata,
    // cookie, jwt) into the host so remote stores' `monoCreateFetcher({ configBaseUrl:
    // 'myOdata' })` resolve. Same as the Vite host. Thunk form for c12's extends chain.
    extends: [

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
            type: 'nuxt',
            template: 'remote',
            url: 'https://github.com/mono-lit/templates/tree/main/nuxt-remote'
        }
    ],
    env,
    fetching: {
        api: {
            monoHostRest: {
                type: 'restful',
                url: String(appEnv.MONO_NUXT_HOST_API_BASE_URL),
            },
            monoHostOData: {
                type: 'odata',
                url: String(appEnv.MONO_NUXT_HOST_ODATA_BASE_URL),
                oDataService: DefaultService,
            },
        },
        auth: {
            // `use` names cookies declared in `cookie[]` below, so each one's `split`
            // flag is inherited from there rather than restated here.
            use: {
                // sent on every API request
                apiRequest: appConfig.jwtRefreshName,
                // the login JWT — sent as the Bearer ON the refresh request itself
                refreshTokenRequest: appConfig.jwtName,
            },
            // Declaring this is what turns on esw's automatic refresh: proactively before
            // a request, and again on a 401 (which is then retried once). Without it the
            // token is merely read from its cookie and sent.
            requestRefreshTokenRequest: {
                // the cookie the new token is written back to
                name: appConfig.jwtRefreshName,
                // where each value sits in the RESPONSE body. `milis` is the cookie
                // LIFETIME — without it the refreshed token is never stored.
                path: {
                    milis: 'Expired',
                    value: 'RefreshToken',
                },
                splitCookie: false,
                fetchParams: {
                    url: '/Auth/RefreshToken',
                    options: {
                        method: 'POST',
                        // Explicit: this is a REST route, and the call that triggers the
                        // refresh is often an OData one (whose base is the /odata root).
                        baseUrl: String(appEnv.MONO_NUXT_HOST_API_BASE_URL),
                    },
                },
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
        {
            name: appConfig.jwtRefreshName,
        }
    ],
    jwt: {
        token: {
            name: appConfig.jwtName,
            split: true,
        },
        refreshToken: {
            name: appConfig.jwtRefreshName,
        },
    },
    menu: [

    ]
});
