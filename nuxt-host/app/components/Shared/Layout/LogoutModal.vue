<script setup lang="ts">
import 'mono-helper/ui/shadow/modal'
import 'mono-helper/ui/shadow/button'

const menuStore = useHostMenuStore()
const fetchAuth = useAuthStore()

function submitLogout() {
    menuStore.logoutOpen = false
    fetchAuth.fetching().postLogout()
}
</script>

<template>

    <mono-shadow-modal color="info" title="Keluar dari aplikasi?" :model-value="menuStore.logoutOpen"
        @mno-close="menuStore.logoutOpen = false">
        <p class="m-0 font-semibold">Sesi Anda akan diakhiri.</p>
        <p class="m-0 mt-1 opacity-80">Anda perlu masuk lagi untuk melanjutkan.</p>

        <span slot="foot" class="flex justify-end gap-2">
            <mono-shadow-button variant="outline" @click="menuStore.logoutOpen = false">Batal</mono-shadow-button>
            <mono-shadow-button variant="solid" color="danger" :loading.prop="fetchAuth.loading.logout"
                @click="submitLogout">Log Out</mono-shadow-button>
        </span>
    </mono-shadow-modal>
</template>
