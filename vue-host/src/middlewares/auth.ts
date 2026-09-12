import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoState } from "mono-utils/runtime"


/**
 * Protected pages. The mock session is just the fake JWT cookie written at
 * login — there is no server to validate it against and no refresh: cookie
 * present => allowed, cookie missing => back to the login page.
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const state = monoState()

  const token = state.cookie[String(state.config?.jwt?.token?.name)]

  if (!token) return "/"

  return true
}
