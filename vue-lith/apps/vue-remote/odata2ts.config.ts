// OData type codegen — EMPTY placeholder. This remote ships no backend of its
// own (everything merges in from the host via `extends`). When this app gets
// its own OData service:
//   1. set `sourceUrl` below (mono.env.ts is the right home for the URL),
//   2. drop the service's `$metadata` at `src/odata/DTO/metadata.xml`,
//   3. run `pnpm odata:gen` and import the generated `DefaultService`.
import type { ConfigFileOptions } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
    services: {
        DTO: {
            sourceUrl: "",
            source: "src/odata/DTO/metadata.xml",
            output: "src/odata/DTO",
        }
    }
}

export default config;
