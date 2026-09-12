//@unocss-include
import { monoJwt } from "mono-utils/runtime";
import { defineConfig, JWTCompleteTokenTypes } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme'
import { DefaultService } from '@mono-host/odata/DTO/DefaultService'
import { env, appEnv } from './mono.env'


const appConfig = {
    jwtName: 'MONO_token',
    jwtRefreshName: 'MONO_tokenRefresh',
}

// cookieDecode reads `document.cookie`, which only exists in the browser. When
// getMonoConfig() loads this file in Node (during Vite config eval), guard so we
// don't touch `document`. These values are only consumed in the non-PROD branch.
const hasDocument = typeof document !== 'undefined';
const jwtToken = hasDocument ? monoJwt().cookieDecode<JWTCompleteTokenTypes>({ cookie: appConfig.jwtName, splitCookie: true }) : null;
const jwtRefreshToken = hasDocument ? monoJwt().cookieDecode<JWTCompleteTokenTypes>({ cookie: appConfig.jwtRefreshName }) : null;


export default defineConfig({
    name: 'mono-host',
    type: 'vue',
    // This app OWNS the shared shell, so it renders its own `src/layouts` and
    // takes none from the apps it federates -- a remote's `default.vue` must not
    // compete with the shell's. A remote declares 'remote' (or nothing) instead.
    // Never inherited: a remote extending this config does NOT pick up 'host'.
    template: 'host',
    extends: [

    ],
    apps: [

    ],
    env,
    fetching: {
        api: {
            monoHostRest: {
                type: 'restful',
                url: String(appEnv.MONO_HOST_API_BASE_URL),
            },
            monoHostOData: {
                type: 'odata',
                url: String(appEnv.MONO_HOST_ODATA_BASE_URL),
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
                        baseUrl: String(appEnv.MONO_HOST_API_BASE_URL),
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
            name: import.meta.env.PROD ? appConfig.jwtName : {
                ...jwtToken,
            },
            split: true,
        },
        refreshToken: {
            name: import.meta.env.PROD ? appConfig.jwtRefreshName : {
                ...jwtRefreshToken,
            },
        },
    },
    menu: [

    ]
});