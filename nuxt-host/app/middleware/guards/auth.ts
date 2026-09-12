import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import appConfig from "@nuxt-host/datas/config"
import { monoCookie } from "mono-utils/runtime"

/**
 * Protected pages. The mock session is just the fake JWT cookie written at
 * login — there is no server to validate it against and no refresh: cookie
 * present => allowed, cookie missing => back to the login page.
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const cookie = monoCookie()

  const token = cookie.get(appConfig.authCookie.jwt, true)

  if (!token) return "/"

  return true
}
