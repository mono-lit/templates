import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoState } from "mono-utils/runtime"
/**
 * The login page. Already holding a session cookie => straight to /home;
 * otherwise stay — and remember where the user was heading so the mock login
 * can redirect there after success (the store reads `route.query.redirect`).
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {

  const state = monoState()
  const token = state.cookie[String(state.config?.jwt?.token?.name)]

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
