
import type { SidebarMenu } from "mono-utils/config";
import { useCookies } from '@vueuse/integrations/useCookies'


interface SearchSidebarOptions {
    input: string;
    list: SidebarMenu[];
    searchable?: (keyof SidebarMenu)[];
}


export const useUtilsHost = () => {
    


    
    let removeCookie = (name: string): boolean => {
    const cookies = useCookies()


        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';

        const checkCookie = cookies.get(name)

        return checkCookie ? true : false
    }


    const overrideRefTemplate = <T extends object, K extends keyof T>(
        store: T,
        key: K,
        replace: T[K]
    ) => {
        store[key] = replace;
    };

    function searchSidebar({ input, list, searchable }: SearchSidebarOptions): SidebarMenu[] {
        const lowerInput = input.toLowerCase();

        function match(item: SidebarMenu): boolean {
            //@ts-ignore
            const keys = searchable || Object.keys(item).filter(k => typeof item[k] === 'string');

            return keys.some((key) => {
                //@ts-ignore
                const value = item[key];
                return typeof value === 'string' && value.toLowerCase().includes(lowerInput);
            });
        }

        function recursiveSearch(items: SidebarMenu[]): SidebarMenu[] {
            const results: SidebarMenu[] = [];

            for (const item of items) {
                const children = item.items ? recursiveSearch(item.items) : [];

                if (match(item) || children.length > 0) {
                    results.push({
                        ...item,
                        items: children.length > 0 ? children : undefined,
                    });
                }
            }

            return results;
        }

        return recursiveSearch(list);
    }




    let getRouteArray = ({ path }: { path: string }) => {
    const parts = path.split('/').filter((e) => e && !e.startsWith('_'))
    return parts.length > 0 ? parts : []
  }



    return {
        getRouteArray,
        overrideRefTemplate,
       removeCookie,
        searchSidebar,
       
      
    }

}