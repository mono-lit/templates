<script setup lang="ts">
import '@mono-lit/helper/ui/dropdown'
import { monoState } from '@mono-lit/utility/runtime'

const menuStore = useHostMenuStore()
const fetchAuth = useAuthStore()

// Session identity from the mock-login JWT payload (ID / USERNAME / NAME).
interface MockJwtPayload { ID?: number | string; USERNAME?: string; NAME?: string }
const session = monoState<{ jwt: { token: MockJwtPayload } }>()
const sessionName = computed(() => String(session.jwt?.token?.NAME ?? 'Administrator'))
const sessionUsername = computed(() => String(session.jwt?.token?.USERNAME ?? 'admin'))
const sessionInitials = computed(() =>
    sessionName.value
        .split(/\s+/)
        .map((word) => word.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase(),
)

const logout = () => {
    menuStore.profileOpen = false
    fetchAuth.fetching().postLogout()
}
</script>

<template>
    <!-- The identity is rendered in the browser only: the session state is a module singleton
         on the server, so nothing user-specific goes into the server HTML. -->
    <mono-dropdown client-skeleton-count="1" client-skeleton-type="row" client-skeleton-bar="w-8 h-8"
        placement="bottom-end" :model-value="menuStore.profileOpen"
        @mno-click="menuStore.profileOpen = $event.detail.modelValue">
        <button slot="main" type="button" aria-label="Profile"
            class="size-8 rounded-full grid place-items-center text-xs font-semibold cursor-pointer bg-[var(--primary)] text-[var(--primary-foreground)]">
            <ClientOnly>{{ sessionInitials }}</ClientOnly>
        </button>

        <div slot="body" class="w-[300px] max-w-[85vw]">
            <div class="flex items-center gap-3 px-3 py-3">
                <div
                    class="size-[42px] shrink-0 rounded-full grid place-items-center font-semibold bg-[var(--primary)] text-[var(--primary-foreground)]">
                    <ClientOnly>{{ sessionInitials }}</ClientOnly>
                </div>
                <div class="min-w-0">
                    <ClientOnly>
                        <div class="font-semibold truncate">{{ sessionName }}</div>
                        <div class="text-sm text-[var(--muted-foreground)] truncate">{{ sessionUsername }}</div>
                        <div class="text-xs text-[var(--muted-foreground)] mt-1">Mock session</div>
                    </ClientOnly>
                </div>
            </div>

            <div class="border-t border-[var(--border)]" />

            <div class="flex flex-col p-1">
                <button type="button"
                    class="flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] text-sm cursor-pointer text-left hover:bg-[var(--muted)]"
                    :disabled="fetchAuth.loading.logout" @click="logout">
                    <span class="i-mdi-logout text-[18px]" />
                    Logout
                </button>
            </div>
        </div>
    </mono-dropdown>
</template>
