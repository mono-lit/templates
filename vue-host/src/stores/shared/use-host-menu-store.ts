import { useStorage } from "@vueuse/core";
import staticDataSidebar  from "@vue-host/datas/menu";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { resolveExtendsAppNames, type SidebarMenu, type MonoConfig } from 'mono-utils/config'
import hostMonoConfig from '../../../mono.config'


export const useHostMenuStore = defineStore("use-host-menu-store", () => {
  const rail = useStorage<boolean>("MONO_sidebar_rail", true);
  const route = useRoute();
  const router = useRouter();

  const additionalMenu = ref<any[]>([])

  const activeMenu = computed(() => route.path);
  const mobileOpen = ref(false);
  const profileOpen = ref(false);
  const logoutOpen = ref(false);
  const search = ref("");

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller("md");

  const sidebarMode = computed<"temporary" | "rail">(() =>
    isMobile.value ? "temporary" : "rail",
  );
  const railProp = computed<boolean | null>(() =>
    isMobile.value ? null : !rail.value,
  );
  const sidebarOpen = computed(() =>
    isMobile.value ? mobileOpen.value : !rail.value,
  );
  const sidebarWidth = computed(() => (isMobile.value ? 280 : 268));

  const onSidebarChange = (e: CustomEvent) => {
    if (isMobile.value) mobileOpen.value = !!e.detail.modelValue;
  };
  const onMenuClick = (e: CustomEvent) => {
    const sourceEvent = e.detail.sourceEvent as MouseEvent | undefined;
    const href = e.detail.item?.href as string | undefined;
    if (!href) return;
    if (
      sourceEvent?.metaKey ||
      sourceEvent?.ctrlKey ||
      sourceEvent?.shiftKey ||
      sourceEvent?.button === 1
    ) {
      return;
    }
    sourceEvent?.preventDefault();
    if (href !== route.path) router.push(href);
    if (isMobile.value) mobileOpen.value = false;
  };
  const toggleRail = () => {
    rail.value = !rail.value;
  };
  const openMobile = () => {
    mobileOpen.value = true;
  };

  const getAllConfig = computedAsync<MonoConfig[]>(async () => {

    function isMonoConfig(v: any): v is MonoConfig {
      if (!v || typeof v !== "object") return false;
      if (typeof v.name !== "string" || !v.name) return false;
      if (v.menu != null && !Array.isArray(v.menu)) return false;
      return true;
    }

    const modules = import.meta.glob<{ default: unknown }>(
      "../../../.mono/apps/**/mono.config.ts",
      { eager: false }
    )


    const allModules = {
      ...modules
    }

    const loaders = Object.entries(allModules).map(async ([file, load]) => {
      try {
        const mod = await load()
        const cfg = (mod as any)?.default ?? mod
        return isMonoConfig(cfg) ? (cfg as MonoConfig) : null
      } catch (e) {
        return null
      }
    })

    const result = (await Promise.all(loaders)).filter(Boolean) as MonoConfig[]

    // `extends` is the single on/off switch for remotes: only apps activated via
    // the host's `mono.config.ts` `extends` contribute a menu. Commenting an
    // extends entry drops its sidebar menu (its clone under `.mono/apps/` stays
    // on disk). No `extends` field ⇒ legacy behavior (every synced config).
    if (hostMonoConfig.extends == null) return result;

    const activeAppNames = new Set(resolveExtendsAppNames(hostMonoConfig));
    return result.filter((cfg) => activeAppNames.has(cfg.name));
  }, [])



  const menuMono = computedAsync<SidebarMenu[]>(async () => {
    const configs = getAllConfig.value;

    console.log({configs})

    const mergeMenus = (modules: Array<{ name: string; menu?: SidebarMenu[] }>) => {
      const withRemote = modules.flatMap((m) =>
        (m.menu ?? []).map((menu) => ({ ...menu, remoteName: m.name }))
      );

      return Object.values(Object.groupBy(withRemote, (g) => g.title)).map((groups) => {

        const { title, url, icon, remoteName: remoteNameFirst } = groups?.[0] ?? {};

        const items = Array.from(
          new Map(
            groups?.flatMap((g) =>
              (g.items ?? []).map((i): [string, SidebarMenu] => [
                `${i.title}|${i.url}`,
                { ...i, remoteName: g.remoteName },
              ])
            )
          ).values()
        );

        return { title: title ?? "", url, icon, items, remoteName: remoteNameFirst };
      });
    };

    if (configs) {
      return mergeMenus(configs);
    }

    return [];
  }, []);

  const mergeSiblings = (a: SidebarMenu[] = [], b: SidebarMenu[] = []): SidebarMenu[] => {
    const byUrl = new Map<string, SidebarMenu>();

    for (const it of a) {
      byUrl.set(it.url || "", {
        ...it,
        items: it.items ? mergeSiblings(it.items, []) : [],
      });
    }

    for (const it of b) {
      const ex = byUrl.get(it.url || "");
      if (!ex) {
        byUrl.set(it.url || "", {
          ...it,
          items: it.items ? mergeSiblings(it.items, []) : [],
        });
      } else {
        if (!ex.title && it.title) ex.title = it.title;
        if (!ex.icon && it.icon) ex.icon = it.icon;
        ex.items = mergeSiblings(ex.items ?? [], it.items ?? []);
      }
    }

    const out: SidebarMenu[] = [];
    const aUrls = new Set(a.map((x) => x.url || ""));

    for (const it of a) out.push(byUrl.get(it.url || "")!);
    for (const it of b) {
      if (!aUrls.has(it.url || "")) out.push(byUrl.get(it.url || "")!);
    }

    return out;
  };

  const menuList = computed(() => {


    return [staticDataSidebar, additionalMenu.value, menuMono.value].reduce((acc, next) => mergeSiblings(acc, next), [])
  }
  );

  const pageTitle = computed(() => {
    if (menuList.value.length > 0) {
      const lastSegment = route.path.split("/").filter(Boolean).pop();

      function findMenuByUrl(items: SidebarMenu[], url: string): SidebarMenu | null {
        for (const item of items) {
          if (item.url === url) return item;
          if (item.items && item.items.length > 0) {
            const found = findMenuByUrl(item.items, url);
            if (found) return found;
          }
        }
        return null;
      }

      return findMenuByUrl(menuList.value, `/${lastSegment}`)?.title ?? "";
    }

    return "";
  });

  return {
    pageTitle,
    menuList,
    rail,
    activeMenu,
    mobileOpen,
    profileOpen,
    logoutOpen,
    search,
    isMobile,
    sidebarMode,
    railProp,
    sidebarOpen,
    sidebarWidth,
    onSidebarChange,
    onMenuClick,
    toggleRail,
    openMobile,
    additionalMenu
  };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useHostMenuStore, import.meta.hot));