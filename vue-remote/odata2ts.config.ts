import type { ConfigFileOptions } from "@odata2ts/odata2ts";
import { appEnv } from './mono.env'

// Base URL comes from the shared `mono.env.ts` (non-secret), not `.env`.
const sourceUrl = String(appEnv.MONO_VUE_ODATA_BASE_URL)

const config: ConfigFileOptions = {
    services: {
        DTO: {
            sourceUrl,
            source: "src/odata/DTO/metadata.xml",
            output: "src/odata/DTO",
        },
    }
}

export default config;