import type {

    QDTO_Brand,
} from '@mono-vue/odata/DTO/QDefault'
import type { MonoOdataMapTypes } from 'mono-utils/runtime'

export type DTO_BrandTypes = MonoOdataMapTypes<typeof QDTO_Brand>

export type BrandPostTypes = {
    Nama: string,
    NamaBudget: string
}