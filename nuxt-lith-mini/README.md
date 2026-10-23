# nuxt-lith-mini

A **mono-lith**: the [nuxt-host](apps/nuxt-host) and the mini remote [nuxt-remote-mini](apps/nuxt-remote-mini) in ONE
repository, connected by `apps[].path` instead of a GitHub clone. The host reads
the mini in place, so editing `apps/nuxt-remote-mini/app/` hot-updates the running host.
See [Mono-Lith](https://mono-libs.netlify.app/lith/getting-started) and [Mini Remotes](https://mono-libs.netlify.app/repo/mini-remote).

Generated from the template folders by `mono-templates/scripts/make-liths.mjs`.

## Layout

```
nuxt-lith-mini/
├── package.json          # the runner: vp run --filter <app> <script>
├── pnpm-workspace.yaml   # apps/* + catalogs, the one install and lockfile
├── vite.config.ts        # vite-plus root config
└── apps/
    ├── nuxt-host/         # template: 'host', apps: [{ name: 'nuxt-remote-mini', path: '../nuxt-remote-mini' }]
    └── nuxt-remote-mini/  # source only: no package.json, adopted by the host
```

## Running it

```bash
vp install             # once, at the root: one node_modules for every app
pnpm dev               # nuxt-host on :7100, with nuxt-remote-mini live
pnpm dev:prod          # the same, with the production env (.env)
pnpm build:dev         # host bundle with .env.dev
pnpm build             # host bundle with .env (= build:prod)
pnpm mono:prepare      # regenerate every app's .mono/tsconfig.json
```

The mini has no `package.json`, so it is not a workspace package and has no
script of its own. The host's `mono prepare` (run by its `dev` and `postinstall`)
links `apps/nuxt-remote-mini/node_modules` to the host's and writes the mini's tsconfig files.
That needs `@mono-lit/utility` with mini-remote support (newer than 0.0.4).

## Lifting an app out

Each app keeps its `url` next to its `path`. Copy `apps/nuxt-host` out on its own and
`../nuxt-remote-mini` is gone: `mono sync` clones it from the `url` instead. It then needs its
own `pnpm-workspace.yaml` (catalogs), like the folders in mono-templates.
