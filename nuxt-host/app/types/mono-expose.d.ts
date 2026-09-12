import type { MonoConfig } from 'mono-utils/config'

// `__MONO_CONFIG_EXPOSE__` is injected as a compile-time global by the
// `vite.define` in nuxt.config.ts (the trimmed, browser-safe subset of the
// resolved mono.config.ts). Mirrors the Vite host's vite.config.ts declaration.
declare global {
    const __MONO_CONFIG_EXPOSE__: Pick<MonoConfig, 'name' | 'apps' | 'cookie' | 'jwt' | 'menu'> & {
        fetching: Pick<NonNullable<MonoConfig['fetching']>, 'auth'>
    }
}

export {}
