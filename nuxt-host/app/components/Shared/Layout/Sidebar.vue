<script setup lang="ts">
import 'mono-helper/ui/shadow/sidebar'
import 'mono-helper/ui/menu'
import type { MenuItem } from 'mono-helper/ui/menu'
import type { SidebarMenu } from 'mono-utils/config'

const menuStore = useHostMenuStore()

function joinUrl(parent: string | undefined, child: string | undefined): string {
    const p = parent || ''
    const c = child || ''
    if (!p) return c
    if (!c) return p
    const head = p.endsWith('/') ? p.slice(0, -1) : p
    const tail = c.startsWith('/') ? c.slice(1) : c
    return `${head}/${tail}`
}

function hasActiveDescendant(item: SidebarMenu, prefix = ''): boolean {
    if (!item?.items?.length) return false
    const itemFullUrl = joinUrl(prefix, item.url)
    return item.items.some((child) => {
        const childFullUrl = joinUrl(itemFullUrl, child.url)
        return (
            childFullUrl === menuStore.activeMenu ||
            hasActiveDescendant(child, itemFullUrl)
        )
    })
}

/**
 * `SidebarMenu` (config shape: `url` + `items`) -> `MenuItem` (component shape:
 * `id`/`href` + `type` + `items`), with every `url` resolved to the full path its
 * ancestors imply.
 *
 * The tree goes to ONE `<mono-menu-list :items.prop>` rather than a nested pair
 * of `<mono-menu-list>` elements. Both are supported, but the element form is the
 * component's *declarative* mode: the group renders an empty
 * `[data-mono-slot="body"]` and re-injects DOM children it grabbed in
 * `connectedCallback`. Under Nuxt that capture races Vue — the menu arrives after
 * hydration (a remote publishes it from `app.vue`'s `onMounted`), through a
 * `<template v-for>` fragment, inside a `<mono-menu>` whose own light-DOM slot
 * content is captured and re-parked — and a group whose children lost that race
 * renders with a chevron and an empty body. Passing `items` takes the data path
 * instead (`bodySlot: false`), where the component recurses over the array itself:
 * no capture, no timing, and any depth. The old template hardcoded exactly two
 * levels and never read `child.items`.
 */
function toMenuItems(list: SidebarMenu[] | undefined, prefix = ''): MenuItem[] {
    return (list ?? []).map((m) => {
        const full = joinUrl(prefix, m.url)
        const children = m.items?.length ? toMenuItems(m.items, full) : []

        if (children.length) {
            return {
                id: full || m.title,
                type: 'group',
                title: m.title,
                subtitle: m.subtitle,
                icon: m.icon,
                items: children,
                // Only ever expands — `_seedDefaultOpenIntoParent` seeds open ids
                // into <mono-menu> and never closes one, so a group the user opened
                // by hand survives a menu update.
                defaultOpen: hasActiveDescendant(m, prefix),
            } satisfies MenuItem
        }

        return {
            id: full || m.title,
            type: 'item',
            title: m.title,
            subtitle: m.subtitle,
            icon: m.icon,
            href: full,
        } satisfies MenuItem
    })
}

const menuItems = computed<MenuItem[]>(() => toMenuItems(menuStore.menuList))
</script>

<template>
    <mono-shadow-sidebar :mode="menuStore.sidebarMode" :width="menuStore.sidebarWidth" :rail-width="64"
        :expand-on-hover="!menuStore.isMobile" :rail="menuStore.railProp" color="surface"
        :model-value="menuStore.sidebarOpen" @mno-change="menuStore.onSidebarChange">
        <div slot="header"
            class="brand-header relative w-full flex items-center gap-2.5 px-3 py-2.5 overflow-hidden bg-gradient-to-br from-[#0f3060] via-[#2563a8] to-[#4a9fd4] rounded-md">
            <div
                class="relative z-1 w-10 h-10 rounded-lg bg-white border border-white/50 shadow-[0_2px_8px_rgba(0,0,0,.16)] flex items-center justify-center text-[#2563a8] text-[1rem] font-black flex-shrink-0">
                EJI</div>
            <div class="mono-sidebar-label relative z-1 leading-tight flex-1 min-w-0">
                <div class="text-white text-[.95rem] font-extrabold tracking-[.02em] truncate">Eka Jaya</div>
                <div class="text-white/70 text-[.6rem] font-medium uppercase tracking-[.13em] mt-0.5 truncate">Beauty
                    Mgmt</div>
            </div>

            <button v-if="!menuStore.isMobile" type="button"
                :aria-label="menuStore.rail ? 'Expand sidebar' : 'Collapse sidebar'"
                :title="menuStore.rail ? 'Expand sidebar' : 'Collapse sidebar'"
                class="mono-sidebar-label rail-chevron relative z-1 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/18 border border-white/28 text-white cursor-pointer transition-colors backdrop-blur-sm hover:bg-white/28 hover:border-white/45"
                @click="menuStore.toggleRail">
                <div v-if="menuStore.rail" class="i-mdi-chevron-right w-4 h-4 text-white"></div>
                <div v-else class="i-mdi-chevron-left w-4 h-4 text-white"></div>
            </button>

            <span
                class="mono-sidebar-label absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/8 pointer-events-none"></span>
        </div>

        <mono-menu client-skeleton-class="flex justify-center items-center" client-skeleton-type="col"
            client-skeleton-bar="w-8 h-8" client-skeleton-count="6" :model-value="menuStore.activeMenu"
            @mno-click="menuStore.onMenuClick">
            <div slot="body">
                <mono-menu-list :items.prop="menuItems"></mono-menu-list>
            </div>
        </mono-menu>

    </mono-shadow-sidebar>
</template>
