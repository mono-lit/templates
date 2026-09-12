// The auth cookie name. Identical to the host's — the remote and the host
// share ONE login, so a token written by either is read by both.
//
// `mono.config.ts` needs this before `__MONO_CONFIG_EXPOSE__` exists (it is
// what BUILDS that global), which is why it lives in its own module rather
// than being read back out of `src/datas/config.ts`.
const appConfig = {
    jwtName: 'MONO_token',
}


export default appConfig
