# mono-nuxt-remote

Create `.env` and `.env.dev` in this folder before installing/running:

**`.env`**

```ini
NODE_ENV="production"
MONO_NUXT_REMOTE_GITHUB_TOKEN=
```

**`.env.dev`**

```ini
NODE_ENV="development"
MONO_NUXT_REMOTE_GITHUB_TOKEN=
```

## `.npmrc` (optional — no token needed)

The mono libraries (`@mono-lit/helper`, `@mono-lit/utility`, `@mono-lit/devextreme`)
are public packages on npmjs (https://www.npmjs.com/org/mono-lit), so a plain
`pnpm install` works with no registry line and no token. The only setting
this folder's `.npmrc` carries (gitignored) is the Node version pnpm should use:

```ini
use-node-version=24.16.0
```
