import { computed } from 'vue'
import { createSharedComposable, useColorMode } from '@vueuse/core'

/**
 * Light / dark for the shell, on VueUse's `useColorMode`.
 *
 * The theme itself never changes: `<body>` carries `theme-color-basecoat theme-vega` for good, and
 * Basecoat's palette has light and dark values. Dark mode is only the `dark` class on `<html>`,
 * which every `<mono-*>` element and every `var(--…)` token follows.
 *
 * The choice is remembered in localStorage (`MONO_colorMode`); the boot script in the page head
 * applies it before first paint, so a dark reload does not flash light.
 */
export const useHostColorMode = createSharedComposable(() => {
    const mode = useColorMode({
        selector: 'html',
        attribute: 'class',
        // Light is the theme's default state; only `dark` is a class.
        modes: { light: '', dark: 'dark' },
        storageKey: 'MONO_colorMode',
        initialValue: 'light',
    })

    const isDark = computed(() => mode.state.value === 'dark')
    const toggle = () => {
        mode.value = isDark.value ? 'light' : 'dark'
    }

    return { isDark, toggle }
})
