# mono-templates

All mono templates in one pnpm workspace (managed with Vite+ — `vp install`, `vp dev`, `vp -C <template> dev`).


## Layout

- `nuxt-host/`, `nuxt-remote/`, `vue-host/`, `vue-remote/` — each standalone (own `.npmrc`, `pnpm-workspace.yaml`, `.env*` files; see each template's README)
- `nuxt-remote-mini/`, `vue-remote-mini/` — **mini remotes**: source only, cannot install or run on their own (see below). Not workspace packages — they have no `package.json`.
- Root `pnpm-workspace.yaml` — shared dependency catalogs (`mono` = the public `@mono-lit/*` packages on npmjs)
- Root `vite.config.ts` — Vite+ workspace management
- `nuxt-lith/`, `vue-lith/`, `nuxt-lith-mini/`, `vue-lith-mini/` — **mono-lith** repos (see below). Each is its own workspace; install inside it, not from here.

## Mono-lith repos

The same templates arranged as a [mono-lith](https://mono-libs.netlify.app/lith/getting-started):
one repository, each app a folder under `apps/`, connected by `apps[].path`
instead of a GitHub clone. One `vp install` at the lith root, and `pnpm dev` runs
the host with its remote read in place.

| Lith | apps/ |
|---|---|
| `nuxt-lith` | `nuxt-host` + `nuxt-remote` |
| `vue-lith` | `vue-host` + `vue-remote` |
| `nuxt-lith-mini` | `nuxt-host` + `nuxt-remote-mini` |
| `vue-lith-mini` | `vue-host` + `vue-remote-mini` |

They are **generated** from the template folders: edit a template, then run
`pnpm lith:sync` (`scripts/make-liths.mjs`). `vp test` fails while a lith is out
of date. The sync never touches a lith's `node_modules` or other ignored output.

## Full remote vs mini remote

| | full (`*-remote`) | mini (`*-remote-mini`) |
|---|---|---|
| Runs on its own | yes (own dev server, port 7101) | **no** — only inside a host |
| `package.json`, lockfile, build config, `uno.config` | own | the host's |
| `.env*`, `mono.env.ts`, `public/`, `odata2ts` | own | the host's |
| `app.vue` / `main.ts`, router, plugins, layouts | own (+ the host's shell) | the host's |
| What it ships | a whole app | `mono.config.ts` + `app/` or `src/` (pages, components, composables, stores, types) |

A mini is the right shape when every developer works on **host + remote
together**: the host owns dependencies, versions and config, so nothing can
drift. The host lists it in `apps[]` exactly like any remote:

- `url` — `mono sync` clones it into `<host>/.mono/apps/<name>`.
- `path: '../<mini>'` — read in place from a sibling checkout (live editing).
  The host's `mono prepare` (run by its `dev` / `postinstall`) then links
  `<mini>/node_modules` to the host's and generates `<mini>/tsconfig.json` +
  `<mini>/.mono/tsconfig.json`, so the editor type-checks the mini against the
  host. All three are gitignored in the mini.

A Vite host using `path` must not set `compilerOptions.rootDir` (TS6059 rejects
the sibling) — `vue-host` passes vue-router's typed-routes `rootDir` through the
Volar plugin's `options` instead.

## `.npmrc` (optional — no token needed)

The mono libraries (`@mono-lit/helper`, `@mono-lit/utility`, `@mono-lit/devextreme`)
are public packages on npmjs (https://www.npmjs.com/org/mono-lit), so a plain
`pnpm install` works with no registry line and no token. The only setting
each `.npmrc` here carries (gitignored) is the Node version pnpm should use:

```ini
use-node-version=24.22.1
```
