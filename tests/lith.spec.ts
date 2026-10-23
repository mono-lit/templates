import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vite-plus/test'

// The four mono-lith repos are generated from the template folders by
// scripts/make-liths.mjs. These checks read their files as text: the lith
// configs import each other through aliases only a lith's own install sets up.

const root = fileURLToPath(new URL('..', import.meta.url))

const liths = [
  { name: 'nuxt-lith', host: 'nuxt-host', remote: 'nuxt-remote', others: ['nuxt-remote-mini'] },
  { name: 'vue-lith', host: 'vue-host', remote: 'vue-remote', others: ['vue-remote-mini'] },
  { name: 'nuxt-lith-mini', host: 'nuxt-host', remote: 'nuxt-remote-mini', others: ['nuxt-remote'] },
  { name: 'vue-lith-mini', host: 'vue-host', remote: 'vue-remote-mini', others: ['vue-remote'] },
]

const GENERATED = new Set(['auto-imports.d.ts', 'components.d.ts', 'typed-router.d.ts'])

const read = (...p: string[]) => readFileSync(join(root, ...p), 'utf8').replace(/\r\n/g, '\n')

/** Files git would commit under `dir`, relative to it. */
function committable(dir: string): string[] {
  return execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '--', dir], {
    cwd: root,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean)
    .filter((f) => existsSync(join(root, f)))
    .map((f) => posix.relative(dir, f))
}

describe.each(liths)('$name', (lith) => {
  const appsDir = `${lith.name}/apps`
  const hostConfig = read(appsDir, lith.host, 'mono.config.ts')

  it('holds exactly the host and its remote under apps/', () => {
    expect(existsSync(join(root, appsDir, lith.host, 'package.json'))).toBe(true)
    expect(existsSync(join(root, appsDir, lith.remote, 'mono.config.ts'))).toBe(true)
    for (const other of lith.others) expect(existsSync(join(root, appsDir, other))).toBe(false)
  })

  it('the host reads the remote in place, with the url as fallback', () => {
    expect(hostConfig).toContain(`name: '${lith.remote}',`)
    expect(hostConfig).toContain(`path: '../${lith.remote}',`)
    expect(hostConfig).toContain(`url: 'https://github.com/mono-lit/templates/tree/main/${lith.remote}',`)
  })

  it('the host federates and extends only this lith’s remote', () => {
    for (const other of lith.others) {
      expect(hostConfig).not.toContain(`name: '${other}'`)
      expect(hostConfig).not.toContain(`@${other}-root/`)
    }
    expect(hostConfig).toContain(`@${lith.remote}-root/mono.config`)
  })

  it.runIf(!lith.remote.endsWith('-mini'))('the remote names the host back by path', () => {
    const remoteConfig = read(appsDir, lith.remote, 'mono.config.ts')
    expect(remoteConfig).toContain(`path: '../${lith.host}',`)
  })

  it('has one workspace and one lockfile, at the root', () => {
    expect(read(lith.name, 'pnpm-workspace.yaml')).toMatch(/packages:\n {2}- apps\/\*/)
    for (const app of [lith.host, lith.remote]) {
      expect(existsSync(join(root, appsDir, app, 'pnpm-workspace.yaml'))).toBe(false)
      expect(existsSync(join(root, appsDir, app, 'pnpm-lock.yaml'))).toBe(false)
    }
  })

  it('runs through Vite+ from the root', () => {
    const pkg = JSON.parse(read(lith.name, 'package.json'))
    expect(pkg.devDependencies['vite-plus']).toBe('1.4.0')
    expect(pkg.scripts.dev).toBe(`vp run --filter ${lith.host} dev`)
    expect(pkg.scripts.build).toBe(`vp run --filter ${lith.host} build`)
  })

  it('is in sync with the template folders (run `pnpm lith:sync`)', () => {
    for (const app of [lith.host, lith.remote]) {
      const want = committable(app).filter((f) => f !== 'pnpm-workspace.yaml' && f !== 'pnpm-lock.yaml')
      expect(committable(`${appsDir}/${app}`).sort()).toEqual([...want].sort())
      for (const f of want) {
        if (f === 'mono.config.ts') continue // patched on the way in, checked above
        // Rewritten by the lith's own dev/build with sibling paths.
        if (GENERATED.has(posix.basename(f))) continue
        expect(read(appsDir, app, f), `${app}/${f}`).toBe(read(app, f))
      }
    }
  })
})
