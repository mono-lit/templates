<script setup lang="ts">
//@unocss-include
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

function hasActiveDescendant(item: any, prefix = ''): boolean {
    if (!item?.items?.length) return false
    const itemFullUrl = joinUrl(prefix, item.url)
    return item.items.some((child: any) => {
        const childFullUrl = joinUrl(itemFullUrl, child.url)
        return (
            childFullUrl === menuStore.activeMenu ||
            hasActiveDescendant(child, itemFullUrl)
        )
    })
}
</script>

<template>
    <mono-sidebar
        :mode="menuStore.sidebarMode"
        :width="menuStore.sidebarWidth"
        :rail-width="64"
        :expand-on-hover="!menuStore.isMobile"
        :rail="menuStore.railProp"
        color="surface"
        :model-value="menuStore.sidebarOpen"
        @mno-change="menuStore.onSidebarChange"
    >
        <div
            slot="header"
            class="brand-header relative w-full flex items-center gap-2.5 px-3 py-2.5 overflow-hidden bg-gradient-to-br from-[#0f3060] via-[#2563a8] to-[#4a9fd4] rounded-md"
        >
            <div
                class="relative z-1 w-10 h-10 rounded-lg bg-white border border-white/50 shadow-[0_2px_8px_rgba(0,0,0,.16)] flex items-center justify-center text-[#2563a8] text-[1rem] font-black flex-shrink-0"
            >EJI</div>
            <div class="mono-sidebar-label relative z-1 leading-tight flex-1 min-w-0">
                <div class="text-white text-[.95rem] font-extrabold tracking-[.02em] truncate">Eka Jaya</div>
                <div class="text-white/70 text-[.6rem] font-medium uppercase tracking-[.13em] mt-0.5 truncate">Beauty Mgmt</div>
            </div>

            <button
                v-if="!menuStore.isMobile"
                type="button"
                :aria-label="menuStore.rail ? 'Expand sidebar' : 'Collapse sidebar'"
                :title="menuStore.rail ? 'Expand sidebar' : 'Collapse sidebar'"
                class="mono-sidebar-label rail-chevron relative z-1 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/18 border border-white/28 text-white cursor-pointer transition-colors backdrop-blur-sm hover:bg-white/28 hover:border-white/45"
                @click="menuStore.toggleRail"
            >
                <div
                    v-if="menuStore.rail"
                    class="i-mdi-chevron-right w-4 h-4 text-white"
                ></div>
                <div
                    v-else
                    class="i-mdi-chevron-left w-4 h-4 text-white"
                ></div>
            </button>

            <span
                class="mono-sidebar-label absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/8 pointer-events-none"
            ></span>
        </div>

        <mono-menu
            :model-value="menuStore.activeMenu"
            @mno-click="menuStore.onMenuClick"
        >
            <div slot="body">
                <template
                    v-for="item in menuStore.menuList"
                    :key="item.url || item.title"
                >
                    <mono-menu-list
                        v-if="item.items && item.items.length"
                        type="group"
                        :id="item.url || item.title"
                        :title="item.title"
                        :icon="item.icon"
                        :default-open="hasActiveDescendant(item) || undefined"
                        :class="{ 'is-active-ancestor': hasActiveDescendant(item) }"
                    >
                        <mono-menu-list
                            v-for="child in item.items"
                            :key="child.url || child.title"
                            type="children"
                            :id="joinUrl(item.url, child.url) || child.title"
                            :title="child.title"
                            :icon="child.icon"
                            :href="joinUrl(item.url, child.url)"
                        ></mono-menu-list>
                    </mono-menu-list>
                    <mono-menu-list
                        v-else
                        type="children"
                        :id="item.url || item.title"
                        :title="item.title"
                        :icon="item.icon"
                        :href="item.url"
                    ></mono-menu-list>
                </template>
            </div>
        </mono-menu>
    </mono-sidebar>
</template>

<style>
mono-menu-list.is-active-ancestor > .mono-menu-group > .mono-menu-group-header {
    color: var(--menu-accent, currentColor);
    background: rgba(var(--menu-accent-rgb, 37 99 235), 0.08);
}

mono-menu-list.is-active-ancestor > .mono-menu-group > .mono-menu-group-header .mono-menu-title {
    font-weight: 600;
    color: var(--menu-accent, currentColor);
}

mono-menu-list.is-active-ancestor > .mono-menu-group > .mono-menu-group-header .mono-menu-icon {
    color: var(--menu-accent, currentColor);
}
</style>


