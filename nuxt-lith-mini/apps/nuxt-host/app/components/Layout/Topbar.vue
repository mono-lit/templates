<script setup lang="ts">
import '@mono-lit/helper/ui/shadow/nav'
import '@mono-lit/helper/ui/shadow/button'
import { useHostColorMode } from '../../composables/use-host-color-mode'

const menuStore = useHostMenuStore()
const { isDark, toggle } = useHostColorMode()

/**
 * The server cannot read the remembered mode (localStorage), so the toggle renders after mount:
 * its glyph is then the real mode, never a stale moon from the server HTML.
 */
const mounted = ref(false)
onMounted(() => {
    mounted.value = true
})
</script>

<template>
    <mono-shadow-nav class="w-full" density="compact" variant="outlined">
        <div slot="start" class="flex items-center gap-2 min-w-0">
            <mono-shadow-button v-if="menuStore.isMobile" variant="text" icon-only aria-label="Open menu"
                @click="menuStore.openMobile">
                <span slot="icon" class="i-mdi-menu" />
            </mono-shadow-button>

            <div class="uppercase tracking-wider text-sm md:text-base font-bold truncate">
                {{ menuStore.pageTitle }}
            </div>
        </div>

        <div slot="end" class="flex items-center gap-2">
            <mono-shadow-button v-if="mounted" variant="text" icon-only
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                :title="isDark ? 'Light mode' : 'Dark mode'" @click="toggle">
                <span slot="icon" :class="isDark ? 'i-mdi-white-balance-sunny' : 'i-mdi-weather-night'" />
            </mono-shadow-button>

            <LayoutProfileDropdown />
        </div>
    </mono-shadow-nav>
</template>
