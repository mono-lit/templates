import type { RouteLocationNormalized } from "vue-router"
import  appConfig from "@mono-host/datas/config"

import { monoJwt, monoToken, monoStatePatch, monoCookie } from "mono-utils/runtime"

// @ts-ignore
export default async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const slTkn = monoToken()
    const authStore = useAuthStore()
    const { safeJSONParse } = useHostHelper()
    const jwt = monoJwt()
    const cookie = monoCookie()
    const getJwt = slTkn.get(appConfig.authCookie.jwt, true)
    const getJwtRefresh = slTkn.get(appConfig.authCookie.jwtRefresh)

    if (!getJwt) {

        return "/"
    }

    var response = null

    if (!getJwtRefresh && getJwt) {
        const res = await authStore.refetchRefreshToken({ token: String(getJwt) })
        if (!res?.response) {
            cookie.remove(appConfig.authCookie.jwt, true)
            cookie.remove(appConfig.authCookie.jwtRefresh)
            return "/"
        }
        response = res
    }

    if (!getJwt && !getJwtRefresh) {
        return "/"
    }

    if (response) {
        const newToken = String(getJwt)
        const newRefreshToken = String(response?.response?.RefreshToken)
        const newJwtToken = jwt.cookieDecode({ token: newToken })
        const newJwtRefreshToken = jwt.cookieDecode({ token: newRefreshToken })

        monoStatePatch({
            cookie: {
                refreshToken: newRefreshToken,
                token: newToken
            },
            jwt: {
                refreshToken: newJwtRefreshToken as any,
                token: newJwtToken as any,
            }
        })
    }

    const decodeJwt = slTkn.decode<any>(appConfig.authCookie.jwt, true)
    const decodePerm = safeJSONParse(decodeJwt?.PERMISSIONS ?? "[]") as any[]

    const normalizePath = (v: unknown) => {
        return String(v ?? "")
            .split("?")[0]
            .split("#")[0]
            .replace(/^\/+/, "")
            .replace(/\/+$/, "")
            .toLowerCase()
    }

    const currentPath = normalizePath(to.path)

    // allow home itself, otherwise redirect loop
    if (currentPath === "home") {
        return true
    }

    const matchedPerm = decodePerm.find((perm) => {
        const permLink = normalizePath(perm?.link)

        if (!permLink) return false

        // exact page match
        return currentPath === permLink

        // use this instead if you want child routes also protected:
        // return currentPath === permLink || currentPath.startsWith(`${permLink}/`)
    })

    if (matchedPerm && matchedPerm.canView === false) {
        return "/home"
    }

    return true
}