<script setup lang="ts">
import '@mono-lit/helper/ui/nav'
import '@mono-lit/helper/ui/button'
import { useHostColorMode } from '../../composables/use-host-color-mode'

const menuStore = useHostMenuStore()
const { isDark, toggle } = useHostColorMode()
</script>

<template>
    <mono-nav class="w-full" density="compact" variant="outlined">
        <div slot="start" class="flex items-center gap-2 min-w-0">
            <mono-button v-if="menuStore.isMobile" variant="text" icon-only aria-label="Open menu"
                @click="menuStore.openMobile">
                <span slot="icon" class="i-mdi-menu" />
            </mono-button>

            <div class="uppercase tracking-wider text-sm md:text-base font-bold truncate">
                {{ menuStore.pageTitle }}
            </div>
        </div>

        <div slot="end" class="flex items-center gap-2">
            <mono-button variant="text" icon-only
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                :title="isDark ? 'Light mode' : 'Dark mode'" @click="toggle">
                <span slot="icon" :class="isDark ? 'i-mdi-white-balance-sunny' : 'i-mdi-weather-night'" />
            </mono-button>

            <LayoutProfileDropdown />
        </div>
    </mono-nav>
</template>
