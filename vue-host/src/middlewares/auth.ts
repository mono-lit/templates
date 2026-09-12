import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import appConfig  from "@mono-host/datas/config"
import {monoState } from "mono-utils/runtime"


export default async (to: RouteLocationNormalized, from: RouteLocationNormalized): Promise<NavigationGuardReturn> => {
  const authStore = useAuthStore()
  const state = monoState()
 

  const getJwt =  state.cookie[appConfig.authCookie.jwt]
  const getJwtRefresh =  state.cookie[appConfig.authCookie.jwtRefresh]

  const decodeJwt = state.jwt.token

  if (!getJwt) return "/"

  if (!getJwtRefresh && decodeJwt) {
    await authStore.refetchRefreshToken({ token: String(getJwt) })
  }

  return true
}
