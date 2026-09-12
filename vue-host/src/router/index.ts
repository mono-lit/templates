import {
  createRouter, createWebHistory, type RouteRecordRaw
  , type NavigationGuardReturn
} from "vue-router"
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as autoRoutes } from "vue-router/auto-routes"
import authMiddleware from "@mono-host/middlewares/auth"
import loggedMiddleware from "@mono-host/middlewares/logged"
import errorMiddleware from "@mono-host/middlewares/error"

const routes = setupLayouts(autoRoutes) as unknown as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from): Promise<NavigationGuardReturn> => {
  const title = String(to.meta?.title ?? "")
  const p = String(to.path ?? "")

  const isError = title === "Error" || p === "/error"
  const isLogin = title === "Login" || p === "/"

  if (isError) return errorMiddleware(to, from)
  if (isLogin) return loggedMiddleware(to, from)

  return authMiddleware(to, from)
})

export default router