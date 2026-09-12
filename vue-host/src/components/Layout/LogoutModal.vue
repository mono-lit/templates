<script setup lang="ts">
const menuStore = useHostMenuStore()
const fetchAuth = useAuthStore()

function submitLogout() {
    menuStore.logoutOpen = false
    fetchAuth.fetching().postLogout()
}
</script>

<template>
    <mono-modal
        color="danger"
        title="Keluar dari aplikasi?"
        :model-value="menuStore.logoutOpen"
        @mno-close="menuStore.logoutOpen = false"
    >
        <p class="m-0 font-semibold">Sesi Anda akan diakhiri.</p>
        <p class="m-0 mt-1 opacity-80">Anda perlu masuk lagi untuk melanjutkan.</p>

        <span slot="foot" class="flex justify-end gap-2">
            <mono-button variant="outline" @click="menuStore.logoutOpen = false">Batal</mono-button>
            <mono-button variant="solid" color="danger" :loading.prop="fetchAuth.loading.logout"
                @click="submitLogout">Log Out</mono-button>
        </span>
    </mono-modal>
</template>
