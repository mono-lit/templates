# vue-remote-mini

A **mini remote**: source only. There is no `package.json`, no vite.config / index.html / main.ts / router, no
`.env*`, no `mono.env.ts`, no `public/` and no `odata2ts` config. **It cannot
install or run on its own.** `vue-host` (or any host of the same type) installs,
builds, prepares and serves it, using its own dependencies, config and shell.

What lives here:

- `mono.config.ts`: `name`, `type`, `template: 'remote'` and the `menu` ("Module Vue Mini").
  It has no `extends` and no `apps[]` pointing back at the host, because the host is the controller.
- `src/`: pages, components, composables, stores and types. Composables are auto-imported by
  the host, so give them names the host doesn't already use (see `src/composables/`).

## Working on it

Check it out **next to** the host, then point the host's `mono.config.ts` entry at it:

```ts
{
    name: 'vue-remote-mini',
    path: '../vue-remote-mini', // read in place: live edits
    url: 'https://github.com/mono-lit/templates/tree/main/vue-remote-mini', // fallback / CI
    type: 'vue',
},
```

Then run the **host** (`pnpm dev`). The host's `mono prepare` generates three
things in this folder. All three are gitignored:

- `node_modules`: a link (a junction on Windows) to the host's `node_modules`. Imports such as
  `vue` and `@mono-lit/utility/*` resolve to the host's copies, so there is one Vue. To remove it,
  delete the link itself; never empty the folder through it.
- `.mono/tsconfig.json`: extends the host's tsconfig.
- `tsconfig.json`: `{ "extends": "./.mono/tsconfig.json" }`, so the editor type-checks this
  folder against the host.

Without `path`, `mono sync` clones it into `<host>/.mono/apps/vue-remote-mini`, the same way as
any other remote.

A dependency this module needs must be added to the **host's** `package.json`.
