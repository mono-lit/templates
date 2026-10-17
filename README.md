# mono-templates

All mono templates in one pnpm workspace (managed with Vite+ — `vp install`, `vp dev`, `vp -C <template> dev`).


## Layout

- `nuxt-host/`, `nuxt-remote/`, `vue-host/`, `vue-remote/` — each standalone (own `.npmrc`, `pnpm-workspace.yaml`, `.env*` files; see each template's README)
- Root `pnpm-workspace.yaml` — shared dependency catalogs (`internal` = mono libraries from the private registry)
- Root `vite.config.ts` — Vite+ workspace management

## `.npmrc` (optional — no token needed)

The mono libraries (`@mono-lit/helper`, `@mono-lit/utility`, `@mono-lit/devextreme`)
are public packages on npmjs (https://www.npmjs.com/org/mono-lit), so a plain
`pnpm install` works with no registry line and no token. The only setting
each `.npmrc` here carries (gitignored) is the Node version pnpm should use:

```ini
use-node-version=24.16.0
```
