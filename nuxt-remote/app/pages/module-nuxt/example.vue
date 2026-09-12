<script setup lang="ts">
import { monoCookie } from 'mono-utils/runtime'
import { monoCreateFetcher } from 'mono-utils/fetching'
import type { DataSource } from 'mono-devextreme'
import 'mono-helper/ui/select'

// `home` is a HOST-owned layout (`.mono/apps/mono-host/app/layouts/home.vue`),
// merged in because `mono.config.ts` declares `template: 'remote'`. This app
// ships no `layouts/` of its own — that it renders with a sidebar and topbar is
// the whole point of the remote.
definePageMeta({
  layout: 'home',
  title: 'Example',
})

// This app's own composable, auto-imported from `app/composables/`.
const { notif } = useMonoNuxtHelper()

const ds = ref<DataSource | null>(null)
const loading = ref(false)

// `monoNuxtOData` is THIS app's api key (mono.config.ts). The host's
// `monoHostOData` is also available here — it merges in through `extends` — so
// the two never collide.
const fetchDepartments = async () => {
  loading.value = true
  try {
    const { dataSource } = await monoCreateFetcher({
      configBaseUrl: 'monoNuxtOData',
      url: '/DTO_Departmen',
    }).response({ options: { paginate: true, pageSize: 5 } })

    ds.value = dataSource
  } catch (error) {
    notif({ type: 'error', message: String(error) })
  } finally {
    loading.value = false
  }
}

// Reads the shared login cookie — the same one the host writes, since both
// configs name `MONO_token`.
const token = monoCookie().get('MONO_token', true)

onMounted(fetchDepartments)
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl font-semibold">Module Nuxt — Example</h1>

    <p class="text-sm text-gray-600">
      This page lives in <code>mono-nuxt-remote/app/pages/</code>. Everything
      around it — the sidebar, the topbar, the auth guard that let you in — comes
      from <code>mono-nuxt-host</code>.
    </p>

    <div class="flex items-center gap-2">
      <button
        class="px-3 py-1.5 rounded bg-black text-white text-sm disabled:opacity-50"
        :disabled="loading"
        @click="fetchDepartments()"
      >
        {{ loading ? 'Loading…' : 'Reload departments' }}
      </button>
      <span class="text-xs text-gray-500">shared login: {{ token ? 'present' : 'none' }}</span>
    </div>

    <mono-select v-if="ds"
      :data-source.prop="ds"
      load-more="scroll"
      key-value="Code"
      display-value="Nama"
    ></mono-select>
  </div>
</template>
