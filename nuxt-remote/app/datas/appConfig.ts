// The two auth cookie names. Identical to the host's — the remote and the host
// share ONE login, so a token written by either is read by both.
//
// `mono.config.ts` needs these before `__MONO_CONFIG_EXPOSE__` exists (it is
// what BUILDS that global), which is why they live in their own module rather
// than being read back out of `app/datas/config.ts`.
const appConfig = {
    jwtName: 'MONO_token',
    jwtRefreshName: 'MONO_tokenRefresh',
}

export default appConfig
