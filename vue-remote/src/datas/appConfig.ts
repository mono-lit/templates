// Base URLs moved to mono.env.ts (non-secret, read via resolveEnv). See docs: repo/env.
const appConfig = {
    jwtName: 'MONO_token',
    jwtRefreshName: 'MONO_tokenRefresh',
}


export default appConfig