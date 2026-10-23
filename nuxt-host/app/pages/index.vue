<script setup lang="ts">
import '@mono-lit/helper/ui/shadow/card'
import '@mono-lit/helper/ui/shadow/input'
import '@mono-lit/helper/ui/shadow/button'

definePageMeta({
  layout: 'auth',
  title: 'Login',
})

const fetchAuth = useAuthStore()
const showPwd = ref(false)

const submit = () => fetchAuth.fetching().postLogin()
</script>

<template>
  <section class="w-full bg-[var(--background)] text-[var(--foreground)]">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div class="mb-6 flex flex-col items-center gap-2">
        <LayoutLogo class="size-12" />
        <div class="text-2xl font-bold tracking-wide">NoCompany</div>
      </div>

      <mono-shadow-card class="block w-full sm:max-w-md" width="100%">
        <div class="space-y-4 md:space-y-6">
          <h1 class="text-xl tracking-1 text-center uppercase font-bold leading-tight md:text-2xl">
            Login
          </h1>

          <form id="login-form" method="POST" class="flex flex-col gap-4 md:gap-5" @submit.prevent="submit">
            <mono-shadow-input id="login-input-username" type="text" variant="underlined" label="Username"
              placeholder="Username" autocomplete="username" :model-value="fetchAuth.input.username"
              :validation-state="fetchAuth.error.username.valid ? 'default' : 'invalid'"
              :error-message="fetchAuth.error.username.message"
              @mno-input="fetchAuth.input.username = $event.detail.modelValue"
              @mno-change="fetchAuth.inputValidate().login('username')" />

            <mono-shadow-input id="login-input-password" :type="showPwd ? 'text' : 'password'" variant="underlined"
              label="Password" placeholder="••••••••" autocomplete="current-password"
              :model-value="fetchAuth.input.password"
              :validation-state="fetchAuth.error.password.valid ? 'default' : 'invalid'"
              :error-message="fetchAuth.error.password.message"
              @mno-input="fetchAuth.input.password = $event.detail.modelValue"
              @mno-change="fetchAuth.inputValidate().login('password')">
              <button slot="suffix" type="button" class="grid place-items-center cursor-pointer"
                :aria-label="showPwd ? 'Hide password' : 'Show password'" @click="showPwd = !showPwd">
                <span :class="showPwd ? 'i-mdi-eye' : 'i-mdi-eye-off'" />
              </button>
            </mono-shadow-input>

            <!-- Mock login: the backend is the browser's IndexedDB (mono's mock API). -->
            <p class="m-0 text-xs text-[var(--muted-foreground)]">
              Mock login: username <code class="font-bold">admin</code> or <code class="font-bold">demo</code>,
              any password.
            </p>

            <mono-shadow-button id="login-submit" type="submit" variant="outline" color="neutral" width="100%"
              icon-position="right" :loading.prop="fetchAuth.loading.login">
              <span slot="icon" class="i-mdi-login-variant" />
              Login
            </mono-shadow-button>
          </form>
        </div>
      </mono-shadow-card>
    </div>
  </section>
</template>
