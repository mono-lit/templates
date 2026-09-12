//@unocss-include
import { defineConfig, type MonoConfig } from 'mono-utils/config'
import { DataSource, ODataStore, CustomStore } from 'mono-devextreme'
// The generated OData service comes from the HOST's clone — no need to copy
// ~830 KB of codegen into this repo just to type the same endpoint. Run
// `pnpm odata:gen` and switch this to `@mono-nuxt/odata/DTO/DefaultService` the
// day this remote talks to a different service than the host.
import { DefaultService } from '@mono-host/odata/DTO/DefaultService'
import monoHostConfig from '@mono-host-root/mono.config'
import appConfig from '@mono-nuxt/datas/appConfig'
import { env, appEnv } from './mono.env'

export default defineConfig({
    name: 'mono-nuxt',
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
        (): MonoConfig => monoHostConfig,
    ],
    apps: [
        {
            name: 'mono-host',
            url: 'https://github.com/EJI-ICT/mono-nuxt-host/tree/main',
            envToken: 'MONO_NUXT_REMOTE_GITHUB_TOKEN',
            // The host is a Nuxt app -> its source lives under `app/`, so
            // `@mono-host` and every federated folder resolve to `app/…`.
            type: 'nuxt',
            // No `path:` here on purpose. It would point dev at the sibling
            // checkout, which lives OUTSIDE this project — and the host's own
            // `mono.config.ts`, pulled in by `extends` below, then resolves
            // `mono-utils/config` from there through jiti's CJS path and dies on
            // `Package subpath './config' is not defined by "exports"`. Run
            // `pnpm mono:sync` to pick up a change to the host.
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
                oDataService: DefaultService,
            },
        },
        auth: {
            // The refresh request itself (`requestRefreshTokenRequest`) is
            // declared by the HOST and merges in via `extends` — restating it
            // here would clobber the host's `/Auth/RefreshToken` wiring.
            //
            // Object form only. The legacy
            // `{ token, tokenRefresh, use: 'tokenRefresh' }` string form cannot
            // say which cookie goes on which request.
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
        },
    },
    // Same cookie names as the host: the two apps share one login.
    cookie: [
        { name: appConfig.jwtName, split: true },
        { name: appConfig.jwtRefreshName },
    ],
    jwt: {
        token: { name: appConfig.jwtName, split: true },
        refreshToken: { name: appConfig.jwtRefreshName },
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
