/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

import type { MonoConfig } from 'mono-utils/config'

// `__MONO_CONFIG_EXPOSE__` is injected as a compile-time global by the
// `vite.define` in monoRepo() (the trimmed, browser-safe subset of the resolved
// mono.config.ts). Read by `src/datas/config.ts`.
declare global {
    const __MONO_CONFIG_EXPOSE__: Pick<MonoConfig, 'name' | 'apps' | 'cookie' | 'jwt' | 'menu'> & {
        fetching: Pick<NonNullable<MonoConfig['fetching']>, 'auth'>
    }
}

export {}
