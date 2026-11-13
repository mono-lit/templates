import type { ConfigFileOptions } from "@odata2ts/odata2ts";
// import { appEnv } from './mono.env'

// Base URL comes from the shared `mono.env.ts` (non-secret), not `.env`.
// const sourceUrl = String(appEnv.MONO_NUXT_REMOTE_ODATA_BASE_URL)

const config: ConfigFileOptions = {
    // One file per kind (DefaultService / DefaultModel / QDefault), as the app imports them.
    // odata2ts 0.45 defaults to false: a folder per namespace and a file per entity.
    bundledFileGeneration: true,
    services: {
        // DTO: {
        //     sourceUrl,
        //     source: "app/odata/DTO/metadata.xml",
        //     output: "app/odata/DTO",
        // }
    }
}

export default config;
