// src/config/mono-config.ts
// `__MONO_CONFIG_EXPOSE__` is declared globally in `vite.config.ts` (alongside
// the `define` that injects it at build time).
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
