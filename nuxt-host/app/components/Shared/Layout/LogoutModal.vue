<script setup lang="ts">
import 'mono-helper/ui/shadow/modal'
import 'mono-helper/ui/shadow/button'
const menuStore = useHostMenuStore()
</script>

<template>

    <mono-shadow-modal color="info" title="Keluar dari aplikasi?" :model-value="menuStore.logoutOpen"
        @mno-close="menuStore.logoutOpen = false">
        <p class="m-0 font-semibold">Sesi Anda akan diakhiri.</p>
        <p class="m-0 mt-1 opacity-80">Anda perlu masuk lagi untuk melanjutkan.</p>

        <span slot="foot" class="flex justify-end gap-2">
            <mono-shadow-button variant="outline" @click="menuStore.logoutOpen = false">Batal</mono-shadow-button>
            <mono-shadow-button variant="solid" color="danger" @click="menuStore.logoutOpen = false">Log Out</mono-shadow-button>
        </span>
    </mono-shadow-modal>
</template>
