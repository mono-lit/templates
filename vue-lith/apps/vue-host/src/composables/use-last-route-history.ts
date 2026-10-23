// composables/useRouteStack.ts
import { computed, reactive } from "vue";
import {
  useRouter,
  type Router,
  type RouteLocationNormalized,
} from "vue-router";

type Store = {
  installed: boolean;
  stack: string[];
};

const STORE_KEY = "__route_stack_singleton__";

function getStore(): Store {
  const g = globalThis as any;

  if (!g[STORE_KEY]) {
    g[STORE_KEY] = reactive<Store>({
      installed: false,
      stack: [],
    });
  }

  return g[STORE_KEY] as Store;
}

function normalizeFullPath(fullPath: string): string {
  const url = new URL(fullPath, window.location.origin);

  // only keep pathname, ignore query and hash
  return url.pathname;
}

function applyNavigation(toFullPath: string, maxSize = 80) {
  const s = getStore();
  const p = normalizeFullPath(toFullPath);
  if (!p) return;

  const top = s.stack[s.stack.length - 1];
  if (top === p) return; // same route path, ignore

  const idx = s.stack.lastIndexOf(p);

  if (idx !== -1) {
    // revisit old path => collapse to there
    s.stack.splice(idx + 1);
    return;
  }

  s.stack.push(p);

  if (s.stack.length > maxSize) {
    s.stack.splice(0, s.stack.length - maxSize);
  }
}

function install(router: Router) {
  const s = getStore();
  if (s.installed) return;
  s.installed = true;

  router.isReady().then(() => {
    if (!s.stack.length) {
      applyNavigation(router.currentRoute.value.fullPath);
    }
  });

  router.afterEach((to: RouteLocationNormalized, _from, failure) => {
    if (failure) return;
    applyNavigation(to.fullPath);
  });
}

export function useRouteStack() {
  const router = useRouter();
  const s = getStore();

  install(router);

  const lastHistory = computed<string | null>(() => {
    if (s.stack.length <= 1) return null;
    return s.stack[s.stack.length - 2] ?? null;
  });

  const goBack = async () => {
    if (!lastHistory.value) return;
    await router.replace(lastHistory.value);
  };

  return {
    lastHistory,
    goBack,
    stack: computed(() => [...s.stack]),
  };
}