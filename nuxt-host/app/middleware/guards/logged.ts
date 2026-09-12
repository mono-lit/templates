import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoState } from "mono-utils/runtime"


/**
 * The login page: already holding a session cookie => straight to /home,
 * otherwise stay and let the user log in.
 */
export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const state = monoState()

  const token = state.cookie[String(state.config?.jwt?.token?.name)]

  return token ? "/home" : true
}
