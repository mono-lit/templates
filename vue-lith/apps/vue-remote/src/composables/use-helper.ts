import { useUtils } from '@mono-lit/utility/runtime'

export const useHelperMonoVue = () => {
    const helper = useUtils();
    return {
        ...helper,
    }
}