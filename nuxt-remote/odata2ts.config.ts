import type { ConfigFileOptions } from "@odata2ts/odata2ts";
import { appEnv } from './mono.env'

// Base URL comes from the shared `mono.env.ts` (non-secret), not `.env`.
const sourceUrl = String(appEnv.MONO_NUXT_REMOTE_ODATA_BASE_URL)

const config: ConfigFileOptions = {
    services: {
        DTO: {
            sourceUrl,
            source: "app/odata/DTO/metadata.xml",
            output: "app/odata/DTO",
        }
    }
}

export default config;
