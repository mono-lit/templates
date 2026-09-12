import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoCookie } from "mono-utils/runtime"
import appConfig from "@mono-host/datas/config"

/**
 * The login page. Already holding a session cookie => straight to /home;
 * otherwise stay — and remember where the user was heading so the mock login
 * can redirect there after success (the store reads `route.query.redirect`).
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const cookie = monoCookie()

  const token = cookie.get(appConfig.authCookie.jwt, true)

  if (token) return "/home"

  const queryRedirect = to.redirectedFrom?.fullPath

  // add redirect query once
  if (queryRedirect && to.query.redirect !== queryRedirect) {
    return {
      path: to.path,
      query: { ...to.query, redirect: queryRedirect },
    }
  }

  return true
}
