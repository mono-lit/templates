import { useUtils } from 'mono-utils/runtime'

/**
 * This app's own helper surface.
 *
 * Deliberately NOT named `useHostHelper` — that one is the HOST's, auto-imported
 * from the federated `app/composables/shared/`, and the host's own guards and
 * stores call it. Two composables of the same name would collide in the
 * auto-import registry.
 */
export const useMonoNuxtHelper = () => {
    return { ...useUtils() }
}
