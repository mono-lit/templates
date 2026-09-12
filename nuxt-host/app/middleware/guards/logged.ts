import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import { useCookies } from "@vueuse/integrations/useCookies"
import appConfig from "@mono-host/datas/config"

export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {
  const cookies = useCookies()
  const token = cookies.get(appConfig.authCookie.jwt)
  if (!token) return "/"
  return true
}
