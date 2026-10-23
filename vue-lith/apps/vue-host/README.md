# mono-host (Vue host)

## Env files and scripts

`.env`, `.env.dev` and `.env.example` are committed and share the same keys in
the same order; only the values differ. Never put a real secret in them.

| Script | Env file | Runs |
|---|---|---|
| `pnpm dev` | `.env.dev` | dev server |
| `pnpm dev:prod` | `.env` | dev server with production env |
| `pnpm build:dev` | `.env.dev` | build (to `dist-dev`) |
| `pnpm build` / `pnpm build:prod` | `.env` | production build |
| `pnpm preview:dev` / `pnpm preview:prod` | `.env.dev` / `.env` | preview the build |

## `.npmrc` (optional — no token needed)

The mono libraries (`@mono-lit/helper`, `@mono-lit/utility`, `@mono-lit/devextreme`)
are public packages on npmjs (https://www.npmjs.com/org/mono-lit), so a plain
`pnpm install` works with no registry line and no token. The only setting
this folder's `.npmrc` carries (gitignored) is the Node version pnpm should use:

```ini
use-node-version=24.22.1
```
