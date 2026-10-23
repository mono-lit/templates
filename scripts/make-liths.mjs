#!/usr/bin/env node
// Builds the four mono-lith repos from the template folders:
//
//   nuxt-lith       apps/nuxt-host + apps/nuxt-remote
//   vue-lith        apps/vue-host  + apps/vue-remote
//   nuxt-lith-mini  apps/nuxt-host + apps/nuxt-remote-mini
//   vue-lith-mini   apps/vue-host  + apps/vue-remote-mini
//
// The templates stay the source of truth: re-run this (`pnpm lith:sync`) after
// changing one, and every lith picks the change up. Each app folder is synced
// (ignored paths such as node_modules and .mono are left alone); the lith's root
// files (package.json, pnpm-workspace.yaml, vite.config.ts, .gitignore,
// README.md) are regenerated.
//
// What changes on the way in (see https://mono-libs.netlify.app/lith/getting-started):
// - the host lists only this lith's remote, by `path` (the `url` stays as the
//   fallback for an app lifted out of the lith), and extends only that remote;
// - a full remote names the host back by `path`;
// - per-app pnpm-lock.yaml / pnpm-workspace.yaml are dropped: the lith root is
//   the one workspace and the one install, so every sibling shares one Vue.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const VITE_PLUS = '1.4.0'

const LITHS = [
  { name: 'nuxt-lith', host: 'nuxt-host', remote: 'nuxt-remote', type: 'nuxt' },
  { name: 'vue-lith', host: 'vue-host', remote: 'vue-remote', type: 'vue' },
  { name: 'nuxt-lith-mini', host: 'nuxt-host', remote: 'nuxt-remote-mini', type: 'nuxt' },
  { name: 'vue-lith-mini', host: 'vue-host', remote: 'vue-remote-mini', type: 'vue' },
]
// Every remote a template host federates; a lith keeps exactly one of them.
const HOST_REMOTES = {
  'nuxt-host': ['nuxt-remote', 'nuxt-remote-mini'],
  'vue-host': ['vue-remote', 'vue-remote-mini'],
}
// Dropped from each app: the lith root owns the workspace and the lockfile.
const SKIP = new Set(['pnpm-lock.yaml', 'pnpm-workspace.yaml'])

const isMini = (app) => app.endsWith('-mini')
const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase())

/** Files git would commit under `dir` (repo-relative): tracked + new-but-not-ignored. */
function committable(dir) {
  const out = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '--', dir], {
    cwd: root,
    encoding: 'utf8',
  })
  return out
    .split('\n')
    .filter(Boolean)
    .filter((f) => fs.existsSync(path.join(root, f)))
}

/**
 * Syncs one template folder into `<lith>/apps/<app>`: copies every committable
 * file, then deletes the committable files the template no longer has. Ignored
 * paths (node_modules, .mono, .nuxt, the mini's node_modules link…) are never
 * touched, so re-running after an install keeps the install.
 */
function syncApp(app, lithDir) {
  const want = new Set(
    committable(app)
      .map((f) => path.posix.relative(app, f))
      .filter((rel) => !SKIP.has(rel)),
  )
  const appDir = path.join(lithDir, 'apps', app)
  const appRel = path.relative(root, appDir).replace(/\\/g, '/')
  if (fs.existsSync(appDir)) {
    for (const f of committable(appRel)) {
      if (!want.has(path.posix.relative(appRel, f))) fs.rmSync(path.join(root, f))
    }
  }
  for (const rel of want) {
    const to = path.join(appDir, rel)
    fs.mkdirSync(path.dirname(to), { recursive: true })
    fs.copyFileSync(path.join(root, app, rel), to)
  }
}

function replaceOnce(text, from, to, where) {
  const i = text.indexOf(from)
  if (i < 0 || text.indexOf(from, i + 1) >= 0) throw new Error(`${where}: expected exactly one ${JSON.stringify(from)}`)
  return text.slice(0, i) + to + text.slice(i + from.length)
}

/** The `{ … },` entry of `apps: [...]` whose `name:` is `name` (8-space entries). */
function appEntryRange(text, name, where) {
  const nameAt = text.indexOf(`name: '${name}',`)
  if (nameAt < 0) throw new Error(`${where}: no apps[] entry named ${name}`)
  const start = text.lastIndexOf('\n        {', nameAt)
  const end = text.indexOf('\n        },', nameAt)
  if (start < 0 || end < 0) throw new Error(`${where}: cannot find the braces around ${name}`)
  return [start, end + '\n        },'.length]
}

const LITH_PATH_COMMENT = (dir) => [
  `            // Mono-lith: read in place from the sibling folder (\`path\` wins whenever`,
  `            // ${dir} exists). \`url\` is the fallback once this app is lifted out.`,
]

function patchHost(file, lith) {
  const where = path.relative(root, file)
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  for (const other of HOST_REMOTES[lith.host].filter((r) => r !== lith.remote)) {
    const ident = `${camel(other)}Config`
    text = replaceOnce(text, `import ${ident} from '@${other}-root/mono.config'\n`, '', where)
    text = replaceOnce(text, `        (): MonoConfig => ${ident},\n`, '', where)
    const [s, e] = appEntryRange(text, other, where)
    text = text.slice(0, s) + text.slice(e)
  }
  // The kept entry: drop its template-mode comment, then add the path.
  const [s, e] = appEntryRange(text, lith.remote, where)
  const entry = text
    .slice(s, e)
    .split('\n')
    .filter((l) => !/^\s*\/\//.test(l))
    .join('\n')
  const withPath = replaceOnce(
    entry,
    `name: '${lith.remote}',\n`,
    [`name: '${lith.remote}',`, ...LITH_PATH_COMMENT(`../${lith.remote}`), `            path: '../${lith.remote}',`, ''].join('\n'),
    where,
  )
  text = text.slice(0, s) + withPath + text.slice(e)
  fs.writeFileSync(file, text)
}

function patchRemote(file, lith) {
  const where = path.relative(root, file)
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  const [s, e] = appEntryRange(text, lith.host, where)
  const entry = text.slice(s, e)
  const withPath = replaceOnce(
    entry,
    `name: '${lith.host}',\n`,
    [`name: '${lith.host}',`, ...LITH_PATH_COMMENT(`../${lith.host}`), `            path: '../${lith.host}',`, ''].join('\n'),
    where,
  )
  text = text.slice(0, s) + withPath + text.slice(e)
  fs.writeFileSync(file, text)
}

function rootWorkspace() {
  // Catalogs come from the template root (the single source of truth); the
  // install settings are the ones the template folders carry.
  const src = fs.readFileSync(path.join(root, 'pnpm-workspace.yaml'), 'utf8').replace(/\r\n/g, '\n')
  const catalogs = src.slice(src.indexOf('catalogs:'))
  return `# Mono-lith root workspace: the ONLY workspace file and the only lockfile.
# One install here hoists every shared dependency to one store, so the host
# compiling a sibling's files resolves the SAME vue / pinia / @mono-lit/helper
# the sibling would. Generated by mono-templates/scripts/make-liths.mjs.
shellEmulator: true

trustPolicy: no-downgrade

trustPolicyExclude:
  - semver@6.3.1

overrides:
  nanoid@^3: 3.3.16
  # Pin Vite for the whole tree: Nuxt itself only asks for \`^8.3.4\`.
  vite: 8.3.4

packages:
  - apps/*

${catalogs.trimEnd()}

onlyBuiltDependencies:
  - esbuild

allowBuilds:
  '@sentry/cli': false
  core-js: false
  esbuild: false
  inferno: false
`
}

function rootPackage(lith) {
  const h = lith.host
  const r = lith.remote
  const scripts = {
    dev: `vp run --filter ${h} dev`,
    'dev:prod': `vp run --filter ${h} dev:prod`,
    ...(!isMini(r) && {
      'dev:remote': `vp run --filter ${r} dev`,
      'dev:remote:prod': `vp run --filter ${r} dev:prod`,
    }),
    build: `vp run --filter ${h} build`,
    'build:dev': `vp run --filter ${h} build:dev`,
    'build:prod': `vp run --filter ${h} build:prod`,
    'preview:dev': `vp run --filter ${h} preview:dev`,
    'preview:prod': `vp run --filter ${h} preview:prod`,
    'mono:prepare': 'vp run -r mono:prepare',
  }
  return {
    name: lith.name,
    private: true,
    type: 'module',
    packageManager: 'pnpm@10.7.0',
    scripts,
    devDependencies: { 'vite-plus': VITE_PLUS },
  }
}

const ROOT_VITE_CONFIG = `import { defineConfig } from 'vite-plus'

// Root runner config (Vite+). The root is not an app: \`vp run --filter <app>\`
// (see package.json) runs that app's own script with its own framework config.
export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
})
`

const ROOT_GITIGNORE = `node_modules/
.pnpm-store/
*.log
*.local
.DS_Store
Thumbs.db
.idea/
.vscode/
.viteplus/
# Only the Node version lives here; optional (see README).
.npmrc
`

function rootReadme(lith) {
  const h = lith.host
  const r = lith.remote
  const mini = isMini(r)
  const src = lith.type === 'nuxt' ? 'app/' : 'src/'
  return `# ${lith.name}

A **mono-lith**: the [${h}](apps/${h}) and the ${mini ? 'mini remote' : 'remote'} [${r}](apps/${r}) in ONE
repository, connected by \`apps[].path\` instead of a GitHub clone. The host reads
the ${mini ? 'mini' : 'remote'} in place, so editing \`apps/${r}/${src}\` hot-updates the running host.
See [Mono-Lith](https://mono-libs.netlify.app/lith/getting-started)${mini ? ' and [Mini Remotes](https://mono-libs.netlify.app/repo/mini-remote)' : ''}.

Generated from the template folders by \`mono-templates/scripts/make-liths.mjs\`.

## Layout

\`\`\`
${lith.name}/
├── package.json          # the runner: vp run --filter <app> <script>
├── pnpm-workspace.yaml   # apps/* + catalogs, the one install and lockfile
├── vite.config.ts        # vite-plus root config
└── apps/
    ├── ${h}/${' '.repeat(Math.max(1, 18 - h.length))}# template: 'host', apps: [{ name: '${r}', path: '../${r}' }]
    └── ${r}/${' '.repeat(Math.max(1, 18 - r.length))}# ${mini ? 'source only: no package.json, adopted by the host' : `template: 'remote', apps: [{ name: '${h}', path: '../${h}' }]`}
\`\`\`

## Running it

\`\`\`bash
vp install             # once, at the root: one node_modules for every app
pnpm dev               # ${h} on :7100, with ${r} live
pnpm dev:prod          # the same, with the production env (.env)
${mini ? '' : `pnpm dev:remote        # ${r} standalone on :7101, wearing the host's shell
`}pnpm build:dev         # host bundle with .env.dev${mini ? '' : ', remote compiled in'}
pnpm build             # host bundle with .env (= build:prod)
pnpm mono:prepare      # regenerate every app's .mono/tsconfig.json
\`\`\`

${mini
    ? `The mini has no \`package.json\`, so it is not a workspace package and has no
script of its own. The host's \`mono prepare\` (run by its \`dev\` and \`postinstall\`)
links \`apps/${r}/node_modules\` to the host's and writes the mini's tsconfig files.
That needs \`@mono-lit/utility\` with mini-remote support (newer than 0.0.4).`
    : `Develop and build through the host: that is the bundle that ships. Run the remote
alone to work on it in isolation; it reads the real host next door.`}

## Lifting an app out

Each app keeps its \`url\` next to its \`path\`. Copy \`apps/${h}\` out on its own and
\`../${r}\` is gone: \`mono sync\` clones it from the \`url\` instead. It then needs its
own \`pnpm-workspace.yaml\` (catalogs), like the folders in mono-templates.
`
}

for (const lith of LITHS) {
  const dir = path.join(root, lith.name)
  syncApp(lith.host, dir)
  syncApp(lith.remote, dir)
  patchHost(path.join(dir, 'apps', lith.host, 'mono.config.ts'), lith)
  if (!isMini(lith.remote)) patchRemote(path.join(dir, 'apps', lith.remote, 'mono.config.ts'), lith)

  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(rootPackage(lith), null, 2) + '\n')
  fs.writeFileSync(path.join(dir, 'pnpm-workspace.yaml'), rootWorkspace())
  fs.writeFileSync(path.join(dir, 'vite.config.ts'), ROOT_VITE_CONFIG)
  fs.writeFileSync(path.join(dir, '.gitignore'), ROOT_GITIGNORE)
  fs.writeFileSync(path.join(dir, 'README.md'), rootReadme(lith))
  console.log(`${lith.name}: apps/${lith.host} + apps/${lith.remote}`)
}
