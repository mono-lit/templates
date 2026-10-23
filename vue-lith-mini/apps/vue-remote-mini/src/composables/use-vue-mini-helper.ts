import { useUtils } from '@mono-lit/utility/runtime'

/**
 * This module's own helper surface. Named uniquely: the host auto-imports every
 * federated app's composables into ONE registry, so a name the host (or another
 * remote) already uses would collide.
 */
export const useVueMiniHelper = () => {
    return { ...useUtils(), appName: 'vue-remote-mini' }
}
