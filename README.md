# mono-templates

All mono templates in one pnpm workspace (managed with Vite+ — `vp install`, `vp dev`, `vp -C <template> dev`).


## Layout

- `nuxt-host/`, `nuxt-remote/`, `vue-host/`, `vue-remote/` — each standalone (own `.npmrc`, `pnpm-workspace.yaml`, `.env*` files; see each template's README)
- Root `pnpm-workspace.yaml` — shared dependency catalogs (`internal` = mono libraries from the private registry)
- Root `vite.config.ts` — Vite+ workspace management

## Create `.npmrc` (required — contains your private token, never committed)

Every `.npmrc` in this repo (root and each template) is **gitignored**.
Create the root one before installing:

```ini
use-node-version=24.16.0
registry=https://mono-libs.netlify.app/npm/
//mono-libs.netlify.app/npm/:_authToken=<your-token>
```

Each template needs the same file (see the template READMEs). Get the
token from the repo owner — it is the `REGISTRY_DOWNLOAD_TOKEN` of the
mono registry; installs fail with 401 without it.
