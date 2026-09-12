<script setup lang="ts">
const menuStore = useHostMenuStore()

function openLogout() {
    menuStore.profileOpen = false
    menuStore.logoutOpen = true
}
</script>

<template>
    <mono-dropdown
        placement="bottom-start"
        color="primary"
        class="flex-shrink-0"
        style="--dropdown-pad-x: 0; --dropdown-pad-y: 0;"
        :model-value="menuStore.profileOpen"
        @mno-click="menuStore.profileOpen = $event.detail.modelValue"
    >
        <button
            slot="main"
            type="button"
            class="ml-1 flex items-center gap-2 pl-1.3 pr-2.2 py-1.3 rounded-[10px] bg-transparent border border-transparent cursor-pointer transition-all hover:bg-[#eff6ff] hover:border-[#dbeafe]"
        >
            <div
                class="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563a8] to-[#4a9fd4] text-white text-[.72rem] font-bold flex items-center justify-center flex-shrink-0"
            >AD</div>
            <div class="leading-tight text-left hidden lg:block">
                <div class="text-[.8rem] font-semibold text-[#1a2d42]">Administrator</div>
                <div class="text-[.68rem] text-[#6a8098]">Super Admin</div>
            </div>
            <span class="i-mdi-chevron-down text-[.7rem] text-[#9ab0c0] ml-0.5"></span>
        </button>

        <div slot="body" class="w-72 overflow-hidden rounded-[12px]">
            <div class="flex items-center gap-3 px-4 py-3.5 bg-[#eff6ff] border-b border-[#dbeafe]">
                <div
                    class="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563a8] to-[#4a9fd4] text-white text-[.85rem] font-bold flex items-center justify-center flex-shrink-0"
                >AD</div>
                <div class="leading-tight min-w-0">
                    <div class="text-[.85rem] font-bold text-[#0f3060] truncate">Administrator</div>
                    <div class="text-[.72rem] text-[#6a8098] truncate">Super Admin · EkaJaya</div>
                    <div class="text-[.7rem] text-[#9ab0c0] mt-0.5 truncate">admin@ekajaya.co.id</div>
                </div>
            </div>

            <button
                type="button"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-left bg-transparent border-none cursor-pointer text-[#3a5068] text-[.83rem] transition-colors hover:bg-[#eff6ff] hover:text-[#2563a8]"
            >
                <div
                    class="w-8 h-8 rounded-lg bg-[#dbeafe] flex items-center justify-center flex-shrink-0"
                >
                    <span class="i-mdi-account-circle-outline text-[1.05rem] text-[#2563a8]"></span>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-[.83rem] font-semibold text-[#1a2d42]">Profil Saya</div>
                    <div class="text-[.7rem] text-[#6a8098] mt-0.5">Lihat & edit profil</div>
                </div>
            </button>

            <button
                type="button"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-left bg-transparent border-none cursor-pointer text-[#3a5068] text-[.83rem] transition-colors hover:bg-[#eff6ff] hover:text-[#2563a8]"
            >
                <div
                    class="w-8 h-8 rounded-lg bg-[#e8f0f5] flex items-center justify-center flex-shrink-0"
                >
                    <span class="i-mdi-key-outline text-[1.05rem] text-[#3a5068]"></span>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-[.83rem] font-semibold text-[#1a2d42]">Ganti Password</div>
                    <div class="text-[.7rem] text-[#6a8098] mt-0.5">Perbarui kata sandi</div>
                </div>
            </button>

            <button
                type="button"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-left bg-transparent border-none cursor-pointer text-[#3a5068] text-[.83rem] transition-colors hover:bg-[#eff6ff] hover:text-[#2563a8]"
            >
                <div
                    class="w-8 h-8 rounded-lg bg-[#e8f0f5] flex items-center justify-center flex-shrink-0"
                >
                    <span class="i-mdi-clipboard-text-clock-outline text-[1.05rem] text-[#3a5068]"></span>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-[.83rem] font-semibold text-[#1a2d42]">Aktivitas Login</div>
                    <div class="text-[.7rem] text-[#6a8098] mt-0.5">Riwayat sesi masuk</div>
                </div>
            </button>

            <div class="h-px bg-[#e8f2f8] my-1"></div>

            <button
                type="button"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-left bg-transparent border-none cursor-pointer text-[#dc2626] text-[.83rem] transition-colors hover:bg-[#fef2f2]"
                @click="openLogout"
            >
                <div
                    class="w-8 h-8 rounded-lg bg-[#fee2e2] flex items-center justify-center flex-shrink-0"
                >
                    <span class="i-mdi-logout text-[1.05rem] text-[#dc2626]"></span>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-[.83rem] font-semibold text-[#dc2626]">Log Out</div>
                    <div class="text-[.7rem] opacity-75 mt-0.5">Keluar dari sistem</div>
                </div>
            </button>
        </div>
    </mono-dropdown>
</template>
