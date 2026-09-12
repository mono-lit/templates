import { useUtils } from 'mono-utils/runtime'

export const useHelperMonoVue = () => {
    const helper = useUtils();
    return {
        ...helper,
    }
}