import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { monoState } from "mono-utils/runtime"

export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const state = monoState()
  
  const token = state.cookie[String(state.config?.jwt?.token?.name)]
  if (!token) return "/"
  return true
}
