import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"
import authGuard from "@mono-host/middleware/guards/auth"
import loggedGuard from "@mono-host/middleware/guards/logged"
import errorGuard from "@mono-host/middleware/guards/error"
import accessGuard from "@mono-host/middleware/guards/access"

/**
 * Shared, framework-agnostic route-guard dispatcher. Picks the guard for a route
 * (by `meta.title` / path) and returns its vue-router `NavigationGuardReturn`
 * (`true` / `false` / path / route-location), already normalized so the result
 * is safe to return directly from either host:
 *  - Nuxt global middleware (`route-guard.global.ts`) maps it to `navigateTo()` /
 *    `abortNavigation()`.
 *  - The Vue/Vite host's `router.beforeEach` returns it as-is.
 *
 * Normalization: a guard may return the location you're ALREADY navigating to
 * (e.g. `loggedGuard` returns "/" while on "/"). Returned verbatim, vue-router
 * warns "infinite redirection" and Nuxt's `navigateTo()` would loop. When the
 * redirect target resolves to the current destination we return `true` (allow)
 * instead, so neither host redirects to where it's already going.
 *
 * The guards read auth from `document.cookie`, so this must run client-side — the
 * Nuxt wrapper guards it with `import.meta.server`; the Vite host is a SPA.
 */
export async function runGuards(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
): Promise<NavigationGuardReturn> {
  const title = String(to.meta?.title ?? "")
  const p = String(to.path ?? "")

  const isError = title === "Error" || p === "/error"
  const isLogin = title === "Login" || p === "/"
  const notLogin = title !== "Login" && p !== "/"

  let result: NavigationGuardReturn

  if (isError) {
    result = errorGuard(to, from)
  } else if (isLogin) {
    result = loggedGuard(to, from)
  } else if (notLogin) {
    result = await accessGuard(to, from)
  } else {
    result = await authGuard(to, from)
  }

  // Allow / abort pass through unchanged.
  if (result === true || result === undefined || result === false) return result

  // Redirect target — `result` is a string path or a route-location object
  // (that's all our guards return; the union also includes Error / name-based
  // locations, hence the casts).
  const targetPath =
    typeof result === "string"
      ? result.split("?")[0]
      : (result as { path?: string }).path
  const targetQuery =
    typeof result === "string"
      ? null
      : ((result as { query?: Record<string, unknown> }).query ?? null)

  const sameLocation =
    targetPath === to.path &&
    (targetQuery === null || JSON.stringify(targetQuery) === JSON.stringify(to.query))

  // Already heading there → allow instead of redirecting (avoids the loop).
  if (sameLocation) return true

  return result
}

export default runGuards
