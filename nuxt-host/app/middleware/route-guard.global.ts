import type { RouteLocationNormalized } from "vue-router"
import { runGuards } from "@mono-host/middleware/run-guards"

/**
 * Nuxt global middleware. Delegates the route→guard dispatch to the shared,
 * framework-agnostic `runGuards` (also used by the Vite host's
 * `router.beforeEach`), then maps its vue-router-style result to Nuxt's
 * `navigateTo()` / `abortNavigation()`.
 *
 * `runGuards` already collapses a "redirect to the location we're already going
 * to" into `true` (allow), so `navigateTo()` here can't loop.
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  // The guards read auth from `document.cookie` via mono-utils (monoToken /
  // monoCookie / monoState), which only exists in the browser. On the server —
  // including SSR and **prerendering** — that throws (`document is not defined`),
  // which is why prerendering `/home` (→ accessGuard) 500s while `/` (→ the
  // SSR-safe loggedGuard) and `/error` (pure) prerender fine. Skip on the server;
  // auth runs client-side after hydration.
  if (import.meta.server) return

  const result = await runGuards(
    to as RouteLocationNormalized,
    from as RouteLocationNormalized,
  )

  // `true` / `undefined` => allow navigation.
  if (result === true || result === undefined) return

  // `false` => abort.
  if (result === false) return abortNavigation()

  // string path or route-location object => redirect.
  return navigateTo(result as any)
})
