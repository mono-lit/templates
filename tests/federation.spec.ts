import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vite-plus/test'
import { resolveExtendsAppNames, type MonoConfig } from 'mono-utils/config'

import nuxtHostConfig from '../nuxt-host/mono.config'
import nuxtRemoteConfig from '../nuxt-remote/mono.config'
import vueHostConfig from '../vue-host/mono.config'
import vueRemoteConfig from '../vue-remote/mono.config'

/** The monorepo every template syncs its federated partner from (deep-folder refs). */
const REPO_BASE = 'https://github.com/mono-lit/templates/tree/main'

const root = fileURLToPath(new URL('..', import.meta.url))

interface Pair {
  kind: 'nuxt' | 'vue'
  host: { config: MonoConfig; dir: string }
  remote: { config: MonoConfig; dir: string }
}

const pairs: Pair[] = [
  {
    kind: 'nuxt',
    host: { config: nuxtHostConfig, dir: 'nuxt-host' },
    remote: { config: nuxtRemoteConfig, dir: 'nuxt-remote' },
  },
  {
    kind: 'vue',
    host: { config: vueHostConfig, dir: 'vue-host' },
    remote: { config: vueRemoteConfig, dir: 'vue-remote' },
  },
]

const appEntry = (config: MonoConfig, name: string) =>
  (config.apps ?? []).find((app) => app.name === name)

describe.each(pairs)('$kind templates: $host.dir ↔ $remote.dir', ({ host, remote }) => {
  it('declares itself with the right role', () => {
    expect(host.config.name).toBeTruthy()
    expect(remote.config.name).toBeTruthy()
    expect(host.config.name).not.toBe(remote.config.name)
    expect(host.config.template).toBe('host')
    expect(host.config.type).toBe(remote.config.type)
  })

  it('host lists the remote in apps[] with a deep-folder URL that exists on disk', () => {
    const entry = appEntry(host.config, remote.config.name!)
    expect(entry, `host apps[] must list remote "${remote.config.name}"`).toBeTruthy()
    expect(entry!.url).toBe(`${REPO_BASE}/${remote.dir}`)
    // Absent reads as 'remote' in mono semantics — both spellings are fine.
    expect(entry!.template ?? 'remote').toBe('remote')
    expect(existsSync(`${root}${remote.dir}`), `sibling folder ${remote.dir}/ must exist`).toBe(true)
  })

  it('remote lists the host in apps[] with a deep-folder URL that exists on disk', () => {
    const entry = appEntry(remote.config, host.config.name!)
    expect(entry, `remote apps[] must list host "${host.config.name}"`).toBeTruthy()
    expect(entry!.url).toBe(`${REPO_BASE}/${host.dir}`)
    expect(existsSync(`${root}${host.dir}`), `sibling folder ${host.dir}/ must exist`).toBe(true)
  })

  it('activates the federation both ways via extends', () => {
    // `extends` is the on/off switch: the host gates the remote's sidebar menu
    // on it (`use-host-menu-store`), the remote pulls the host's shell config.
    expect(resolveExtendsAppNames(host.config)).toContain(remote.config.name)
    expect(resolveExtendsAppNames(remote.config)).toContain(host.config.name)
  })

  it('shares one login: identical single MONO_token cookie + jwt on both sides', () => {
    const expectedCookie = [{ name: 'MONO_token', split: true }]
    expect(host.config.cookie).toEqual(expectedCookie)
    expect(remote.config.cookie).toEqual(expectedCookie)
    expect(host.config.jwt?.token?.name).toBe('MONO_token')
    expect(remote.config.jwt?.token?.name).toBe('MONO_token')
    // No refresh-token machinery anywhere — the mock login has no server.
    expect(host.config.jwt?.refreshToken).toBeUndefined()
    expect(remote.config.jwt?.refreshToken).toBeUndefined()
    expect(host.config.fetching?.auth).toBeUndefined()
  })

  it('remote fetching entries (if any) resolve to a real url — never "undefined"', () => {
    const entries = Object.entries(remote.config.fetching?.api ?? {})
    const mockBaseUrls = new Set(Object.keys(host.config.mockIndexedDB!.schema))
    for (const [key, entry] of entries) {
      expect(entry.url, `fetching.api.${key} must have a url`).toBeTruthy()
      expect(entry.url, `fetching.api.${key} reads an unset env value`).not.toBe('undefined')
      expect(
        /^https?:\/\//.test(entry.url) || mockBaseUrls.has(entry.url),
        `fetching.api.${key} url "${entry.url}" must be an http(s) URL or a mock base-url`,
      ).toBe(true)
    }
  })

  it('remote contributes a non-empty menu to the host sidebar', () => {
    expect(remote.config.menu?.length).toBeGreaterThan(0)
    for (const item of remote.config.menu ?? []) {
      expect(item.title).toBeTruthy()
      expect(item.url).toBeTruthy()
    }
  })

  it('host mock backend: users entity is the login source of truth', () => {
    const mock = host.config.mockIndexedDB
    expect(mock, 'host must declare a mockIndexedDB backend').toBeTruthy()

    const baseUrls = Object.keys(mock!.schema)
    expect(baseUrls.length).toBeGreaterThan(0)

    const users = mock!.schema[baseUrls[0]!]!.users
    expect(users, 'mock schema must have a users entity').toBeTruthy()
    expect(users!.fields.Id).toBe('number|primary')
    expect(users!.fields.Username).toBe('string')
    expect(users!.fields.Name).toBe('string')
    expect(users!.fields.LastLogin).toBe('date')

    const seed = users!.seed ?? []
    expect(seed.length).toBeGreaterThan(0)
    const usernames = seed.map((row) => row.Username)
    expect(new Set(usernames).size).toBe(usernames.length)
    for (const row of seed) {
      expect(row.Id).toBeTruthy()
      expect(row.Name).toBeTruthy()
    }
  })

  it('host fetching entries all resolve into the mock backend', () => {
    const baseUrls = new Set(Object.keys(host.config.mockIndexedDB!.schema))
    const entries = Object.entries(host.config.fetching?.api ?? {})
    expect(entries.length).toBeGreaterThan(0)
    for (const [key, entry] of entries) {
      expect(
        baseUrls.has(entry.url),
        `fetching.api.${key} url "${entry.url}" must be a mockIndexedDB base-url`,
      ).toBe(true)
    }
  })

  it('host login store wires the mock flow (LastLogin write + fake JWT)', () => {
    const storeFile =
      host.config.type === 'nuxt'
        ? 'app/stores/use-auth-store.ts'
        : 'src/stores/shared/use-auth-store.ts'
    const store = readFileSync(`${root}${host.dir}/${storeFile}`, 'utf8')
    expect(store).toMatch(/LastLogin/)
    expect(store).toMatch(/monoHostRest/)
    expect(store).toMatch(/createMockJwtHost/)
    // The session cookie is read back from the mono config (not hardcoded),
    // so the store stays in sync with `jwt.token` in mono.config.ts.
    expect(store).toMatch(/jwt\?\.token\?\.name/)
  })

  it('host ships a login page', () => {
    const loginFile =
      host.config.type === 'nuxt' ? 'app/pages/index.vue' : 'src/pages/index.vue'
    expect(existsSync(`${root}${host.dir}/${loginFile}`)).toBe(true)
  })
})

describe('cross-template invariants', () => {
  it('every app name is unique across the four templates', () => {
    const names = pairs.flatMap((pair) => [pair.host.config.name, pair.remote.config.name])
    expect(new Set(names).size).toBe(names.length)
    expect(names).toEqual(expect.arrayContaining(['nuxt-host', 'nuxt-remote', 'vue-host', 'vue-remote']))
  })

  it('the two hosts do not share a mock base-url (IndexedDB stores stay apart)', () => {
    const [a, b] = pairs.map((pair) => Object.keys(pair.host.config.mockIndexedDB!.schema)[0])
    expect(a).toBeTruthy()
    expect(b).toBeTruthy()
    expect(a).not.toBe(b)
  })
})
