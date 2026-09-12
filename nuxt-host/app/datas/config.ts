// `__MONO_CONFIG_EXPOSE__` is a compile-time global injected by the
// `vite.define` in nuxt.config.ts (the trimmed, browser-safe subset of the
// resolved mono.config.ts). Same pattern as the Vite host's src/datas/config.ts.
const monoConfig = __MONO_CONFIG_EXPOSE__

const use = monoConfig.fetching?.auth?.use

/**
 * The two auth cookie names, resolved once from `fetching.auth.use`.
 *
 * Read `appConfig.authCookie.*` rather than `appConfig.fetching.auth.token` /
 * `.tokenRefresh`: those keys are deprecated, and they can't express which cookie goes on
 * which request — which is what mono needs in order to refresh the token for you.
 *
 * `use` also accepts a legacy string form, so narrow before reading it. Doing that here,
 * once, keeps the narrowing out of every call site.
 */
const authCookie = {
  /** The split JWT written at login. Also the Bearer sent ON the refresh request. */
  jwt: typeof use === 'object' ? String(use.refreshTokenRequest) : '',
  /** The token sent on every API request. This is what a refresh re-issues. */
  jwtRefresh: typeof use === 'object' ? String(use.apiRequest) : '',
}

export default {
  ...monoConfig,
  authCookie,
}
