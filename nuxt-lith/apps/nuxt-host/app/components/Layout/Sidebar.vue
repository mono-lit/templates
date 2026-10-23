<script setup lang="ts">
import '@mono-lit/helper/ui/shadow/sidebar'
import '@mono-lit/helper/ui/input'
import '@mono-lit/helper/ui/menu'
import type { MenuItem } from '@mono-lit/helper/ui/menu'
import type { SidebarMenu } from '@mono-lit/utility/config'
import { useHostColorMode } from '../../composables/use-host-color-mode'

const menuStore = useHostMenuStore()
// A black panel in both modes: Basecoat's `dark` colour in light mode; in dark mode `dark` turns
// light grey, and the near-black `surface` takes over.
const { isDark } = useHostColorMode()

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

/** The menu search: a row stays when its title matches, a group when any row under it does. */
function filterMenu(list: SidebarMenu[] | undefined, query: string): SidebarMenu[] {
    if (!query) return list ?? []
    return (list ?? []).flatMap((m) => {
        if (m.title?.toLowerCase().includes(query)) return [m]
        const items = filterMenu(m.items, query)
        return items.length ? [{ ...m, items }] : []
    })
}

/**
 * `SidebarMenu` (config shape: `url` + `items`) -> `MenuItem` (component shape:
 * `id`/`href` + `type` + `items`), with every `url` resolved to the full path its
 * ancestors imply. The tree goes to ONE `<mono-menu-list :items.prop>`: the data
 * path renders any depth with no DOM capture to race Vue's hydration.
 */
function toMenuItems(list: SidebarMenu[] | undefined, prefix = '', searching = false): MenuItem[] {
    return (list ?? []).map((m) => {
        const full = joinUrl(prefix, m.url)
        const children = m.items?.length ? toMenuItems(m.items, full, searching) : []

        if (children.length) {
            return {
                id: full || m.title,
                type: 'group',
                title: m.title,
                subtitle: m.subtitle,
                icon: m.icon,
                items: children,
                // Open around the active row, and around every match while searching.
                defaultOpen: searching || hasActiveDescendant(m, prefix),
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

const query = computed(() => menuStore.search.trim().toLowerCase())
const menuItems = computed<MenuItem[]>(() => toMenuItems(filterMenu(menuStore.menuList, query.value), '', !!query.value))
</script>

<template>
    <mono-shadow-sidebar :color="isDark ? 'surface' : 'dark'" density="compact" :mode="menuStore.sidebarMode" :width="menuStore.sidebarWidth"
        :rail-width="64" :rail="menuStore.railProp" :expand-on-hover="!menuStore.isMobile"
        :model-value="menuStore.sidebarOpen" @mno-change="menuStore.onSidebarChange">
        <div slot="header" class="w-full flex items-center justify-center gap-3 min-w-0">
            <!-- The only thing in the collapsed rail's header. -->
            <LayoutLogo class="size-8 shrink-0" />
            <span class="mono-sidebar-label font-bold text-base truncate flex-1">NoCompany</span>
            <!-- Hidden in the collapsed rail. The label class sits on a wrapper with no display of its own:
                 on the button, its `grid` would override the rail's hiding. A plain button, so it takes the
                 panel's own ink (light on the black panel). -->
            <span class="mono-sidebar-label">
                <button type="button" class="size-8 shrink-0 grid place-items-center rounded-[var(--radius)] cursor-pointer bg-transparent border-0 text-inherit hover:bg-white/10"
                    :aria-label="menuStore.isMobile ? 'Close menu' : (menuStore.rail ? 'Expand menu' : 'Collapse menu')"
                    @click="menuStore.isMobile ? (menuStore.mobileOpen = false) : menuStore.toggleRail()">
                    <span class="text-lg" :class="menuStore.isMobile ? 'i-mdi-close' : (menuStore.rail ? 'i-mdi-arrow-expand-right' : 'i-mdi-arrow-collapse-left')" />
                </button>
            </span>
        </div>

        <div class="flex flex-col gap-2 min-h-0">
            <mono-input class="mono-sidebar-label" client-skeleton-count="1" client-skeleton-type="row"
                client-skeleton-bar="w-full h-8" size="sm" clearable placeholder="Search menu..."
                :model-value="menuStore.search" @mno-input="menuStore.search = $event.detail.modelValue ?? ''"
                @mno-clear="menuStore.search = ''">
                <span slot="prefix" class="i-mdi-magnify" />
            </mono-input>

            <mono-menu client-skeleton-class="flex justify-center items-center" client-skeleton-type="col"
                client-skeleton-bar="w-8 h-8" client-skeleton-count="6"
                :model-value="menuStore.activeMenu" @mno-click="menuStore.onMenuClick">
                <div slot="body">
                    <mono-menu-list :items.prop="menuItems"></mono-menu-list>
                </div>
            </mono-menu>
        </div>
    </mono-shadow-sidebar>
</template>
