import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoCookie } from "mono-utils/runtime"
import appConfig from "@nuxt-host/datas/config"

/**
 * The login page: already holding a session cookie => straight to /home,
 * otherwise stay and let the user log in.
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const cookie = monoCookie()

  const token = cookie.get(appConfig.authCookie.jwt, true)

  return token ? "/home" : true
}
