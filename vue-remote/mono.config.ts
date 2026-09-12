//@unocss-include
import { monoJwt } from "mono-utils/runtime";
import { defineConfig, type MonoConfig, JWTCompleteTokenTypes } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme';
import { DefaultService } from '@mono-host/odata/DTO/DefaultService'
import monoHostConfig from '@mono-host-root/mono.config'

import appConfig from '@mono-vue/datas/appConfig'
import { env, appEnv } from './mono.env'

// cookieDecode reads `document.cookie`, which only exists in the browser. When
// getMonoConfig() loads this file in Node (during Vite config eval), guard so we
// don't touch `document`. These values are only consumed in the non-PROD branch.
const hasDocument = typeof document !== 'undefined';
const jwtToken = hasDocument ? monoJwt().cookieDecode<JWTCompleteTokenTypes>({ cookie: appConfig.jwtName, splitCookie: true }) : null;
const jwtRefreshToken = hasDocument ? monoJwt().cookieDecode<JWTCompleteTokenTypes>({ cookie: appConfig.jwtRefreshName }) : null;

export default defineConfig({
    name: 'mono-vue',
    type: 'vue',
    extends: [
        (): MonoConfig => monoHostConfig,
    ],
    apps: [
        {
            name: 'mono-host',
            url: "https://github.com/EJI-ICT/mono-vue-host/tree/main",
            envToken: "MONO_VUE_GITHUB_TOKEN",
            type: 'vue'
        }
    ],
    env,
    fetching: {
        api: {
            myRest: {
                type: 'restful',
                url: String(appEnv.MONO_VUE_API_BASE_URL),
            },
            myOdata: {
                type: 'odata',
                url: String(appEnv.MONO_VUE_ODATA_BASE_URL),
                oDataService: DefaultService,
            },
        },
        auth: {
            // `use` names cookies declared in `cookie[]` below, so each one's `split` flag
            // is inherited from there. The refresh request itself (`requestRefreshTokenRequest`)
            // is declared by the HOST and merges in via `extends` — no need to restate it.
            //
            // Do NOT go back to the legacy `{ token, tokenRefresh, use: 'tokenRefresh' }` form:
            // this config is the override layer, so its string `use` would replace the host's
            // object form and silently downgrade the host's auth.
            use: {
                // sent on every API request
                apiRequest: appConfig.jwtRefreshName,
                // the login JWT — sent as the Bearer ON the refresh request itself
                refreshTokenRequest: appConfig.jwtName,
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