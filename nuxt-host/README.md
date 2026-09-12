# mono-nuxt-host

Create `.env` and `.env.dev` in this folder before installing/running:

**`.env`**

```ini
NODE_ENV="production"
MONO_NUXT_HOST_GITHUB_TOKEN=
VITE_SENTRY_ENABLED=
VITE_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

**`.env.dev`**

```ini
NODE_ENV="development"
VITE_SENTRY_ENABLED="false"
MONO_NUXT_HOST_GITHUB_TOKEN=
```

## Create `.npmrc` (required — contains your private token, never committed)

The `.npmrc` in this folder is **gitignored**. Create it yourself:

```ini
use-node-version=24.16.0
registry=https://mono-libs.netlify.app/npm/
//mono-libs.netlify.app/npm/:_authToken=<your-token>
```

Get the token from the repo owner — it is the `REGISTRY_DOWNLOAD_TOKEN` of
the mono registry. Without it, installing the private `mono-*` packages
fails with 401.
