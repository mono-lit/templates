<script setup lang="ts">
import 'mono-helper/ui/shadow/nav'
import 'mono-helper/ui/input'
const menuStore = useHostMenuStore()
</script>

<template>

    <mono-shadow-nav color="surface" variant="elevated" density="comfortable">
        <div slot="start" class="flex items-center gap-3">
            <button v-if="menuStore.isMobile" type="button" title="Open menu"
                class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-transparent border border-transparent text-[#3a5068] cursor-pointer transition-all hover:bg-[#eff6ff] hover:border-[#dbeafe]"
                @click="menuStore.openMobile">
                <span class="i-mdi-menu text-[1.25rem]"></span>
            </button>

            <div class="flex flex-col leading-tight">
                <h1 class="m-0 text-[1.05rem] font-bold text-[#0f3060] leading-tight">Dashboard</h1>
                <p class="m-0 mt-0.5 text-[.73rem] text-[#6a8098]">Selamat datang kembali, Administrator!</p>
            </div>
        </div>

        <div slot="end" class="flex items-center gap-1 min-w-0">
            <div class="hidden md:block flex-shrink min-w-0 max-w-65 mr-2">
                <mono-input client-skeleton-count="1" client-skeleton-type="row" client-skeleton-bar="w-40 h-8"
                    type="search" size="sm" variant="outlined" placeholder="Cari proposal, klaim..."
                    :model-value="menuStore.search" clearable @mno-input="menuStore.search = $event.detail.modelValue">
                    <span slot="prefix" class="i-mdi-magnify text-[#6a8098]"></span>
                </mono-input>
            </div>

            <button type="button" title="My Inbox"
                class="flex-shrink-0 relative px-2.3 py-2 rounded-[10px] bg-transparent border border-transparent text-[#3a5068] cursor-pointer transition-all flex items-center justify-center hover:bg-[#eff6ff] hover:border-[#dbeafe]">
                <span class="i-mdi-email-outline text-[1.05rem]"></span>
                <span
                    class="absolute top-1 right-1 min-w-4 h-4 rounded-full bg-[#ef4444] text-white text-[.58rem] font-bold leading-none flex items-center justify-center px-1 border-1.5 border-white">3</span>
            </button>

            <button type="button" title="Apps"
                class="hidden xl:flex flex-shrink-0 relative px-2.3 py-2 rounded-[10px] bg-transparent border border-transparent text-[#3a5068] cursor-pointer transition-all items-center justify-center hover:bg-[#eff6ff] hover:border-[#dbeafe]">
                <span class="i-mdi-apps text-[1.05rem]"></span>
            </button>

            <button type="button" title="Pengaturan"
                class="hidden lg:flex flex-shrink-0 relative px-2.3 py-2 rounded-[10px] bg-transparent border border-transparent text-[#3a5068] cursor-pointer transition-all items-center justify-center hover:bg-[#eff6ff] hover:border-[#dbeafe]">
                <span class="i-mdi-cog-outline text-[1.05rem]"></span>
            </button>

            <SharedLayoutProfileDropdown />
            <SharedLayoutLogoutModal />
        </div>
    </mono-shadow-nav>
</template>
