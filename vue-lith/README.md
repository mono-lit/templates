# vue-lith

A **mono-lith**: the [vue-host](apps/vue-host) and the remote [vue-remote](apps/vue-remote) in ONE
repository, connected by `apps[].path` instead of a GitHub clone. The host reads
the remote in place, so editing `apps/vue-remote/src/` hot-updates the running host.
See [Mono-Lith](https://mono-libs.netlify.app/lith/getting-started).

Generated from the template folders by `mono-templates/scripts/make-liths.mjs`.

## Layout

```
vue-lith/
├── package.json          # the runner: vp run --filter <app> <script>
├── pnpm-workspace.yaml   # apps/* + catalogs, the one install and lockfile
├── vite.config.ts        # vite-plus root config
└── apps/
    ├── vue-host/          # template: 'host', apps: [{ name: 'vue-remote', path: '../vue-remote' }]
    └── vue-remote/        # template: 'remote', apps: [{ name: 'vue-host', path: '../vue-host' }]
```

## Running it

```bash
vp install             # once, at the root: one node_modules for every app
pnpm dev               # vue-host on :7100, with vue-remote live
pnpm dev:prod          # the same, with the production env (.env)
pnpm dev:remote        # vue-remote standalone on :7101, wearing the host's shell
pnpm build:dev         # host bundle with .env.dev, remote compiled in
pnpm build             # host bundle with .env (= build:prod)
pnpm mono:prepare      # regenerate every app's .mono/tsconfig.json
```

Develop and build through the host: that is the bundle that ships. Run the remote
alone to work on it in isolation; it reads the real host next door.

## Lifting an app out

Each app keeps its `url` next to its `path`. Copy `apps/vue-host` out on its own and
`../vue-remote` is gone: `mono sync` clones it from the `url` instead. It then needs its
own `pnpm-workspace.yaml` (catalogs), like the folders in mono-templates.
