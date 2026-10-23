// `__MONO_CONFIG_EXPOSE__` is a compile-time global injected by the
// `vite.define` in nuxt.config.ts (the trimmed, browser-safe subset of the
// resolved mono.config.ts). Same pattern as the Vite host's src/datas/config.ts.
const monoConfig = __MONO_CONFIG_EXPOSE__

/**
 * The mock-login session cookie, resolved once from `jwt.token` in
 * mono.config.ts — the only auth cookie this template declares.
 */
const jwtName = monoConfig.jwt?.token?.name

const authCookie = {
    /** The fake JWT written at mock login. Its presence IS the session. */
    jwt: typeof jwtName === 'string' ? jwtName : '',
}

export default {
    ...monoConfig,
    authCookie,
}
