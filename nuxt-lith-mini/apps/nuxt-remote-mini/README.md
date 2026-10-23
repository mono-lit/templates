# nuxt-remote-mini

A **mini remote**: source only. There is no `package.json`, no nuxt.config, no
`.env*`, no `mono.env.ts`, no `public/` and no `odata2ts` config. **It cannot
install or run on its own.** `nuxt-host` (or any host of the same type) installs,
builds, prepares and serves it, using its own dependencies, config and shell.

What lives here:

- `mono.config.ts`: `name`, `type`, `template: 'remote'` and the `menu` ("Module Nuxt Mini").
  It has no `extends` and no `apps[]` pointing back at the host, because the host is the controller.
- `app/`: pages, components, composables, stores and types. Composables are auto-imported by
  the host, so give them names the host doesn't already use (see `app/composables/`).

## Working on it

Check it out **next to** the host, then point the host's `mono.config.ts` entry at it:

```ts
{
    name: 'nuxt-remote-mini',
    path: '../nuxt-remote-mini', // read in place: live edits
    url: 'https://github.com/mono-lit/templates/tree/main/nuxt-remote-mini', // fallback / CI
    type: 'nuxt',
},
```

Then run the **host** (`pnpm dev`). The host's `mono prepare` generates three
things in this folder. All three are gitignored:

- `node_modules`: a link (a junction on Windows) to the host's `node_modules`. Imports such as
  `vue` and `@mono-lit/utility/*` resolve to the host's copies, so there is one Vue. To remove it,
  delete the link itself; never empty the folder through it.
- `.mono/tsconfig.json`: extends the host's tsconfig (`.nuxt/tsconfig.app.json`).
- `tsconfig.json`: `{ "extends": "./.mono/tsconfig.json" }`, so the editor type-checks this
  folder against the host.

Without `path`, `mono sync` clones it into `<host>/.mono/apps/nuxt-remote-mini`, the same way as
any other remote.

A dependency this module needs must be added to the **host's** `package.json`.
