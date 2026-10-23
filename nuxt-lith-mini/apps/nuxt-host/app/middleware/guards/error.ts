import type { RouteLocationNormalized, NavigationGuardReturn } from "vue-router"


export default (to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn => {

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
