<script setup lang="ts">
import 'mono-helper/ui/shadow/card'
import 'mono-helper/ui/shadow/input'
import 'mono-helper/ui/shadow/button'

definePageMeta({
  layout: 'auth',
  title: 'Login',
})

const fetchAuth = useAuthStore()
const showPwd = ref(false)

const submit = () => fetchAuth.fetching().postLogin()
</script>

<template>
  <section
    class="
      min-h-screen
      flex
      bg-slate-50
      text-blue-950
      font-sans
    "
  >
    <!-- LEFT BRAND PANEL -->
    <aside
      class="
        hidden
        md:flex
        w-1/2
        max-w-lg
        relative
        overflow-hidden
        flex-col
        justify-between
        p-10
        text-white
        bg-gradient-to-br
        from-blue-950
        via-blue-700
        to-sky-400
      "
    >
      <!-- Decorative blobs -->
      <span
        class="
          absolute
          -right-16
          -top-16
          w-64
          h-64
          rounded-full
          pointer-events-none
          bg-white/10
        "
      />

      <span
        class="
          absolute
          -left-10
          bottom-10
          w-40
          h-40
          rounded-full
          pointer-events-none
          bg-white/10
        "
      />

      <!-- Brand mark -->
      <div class="relative z-1 flex items-center gap-3">
        <div
          class="
            w-12
            h-12
            rounded-xl
            bg-white
            border
            border-white/50
            shadow-lg
            flex
            items-center
            justify-center
            text-blue-700
            text-lg
            font-black
            shrink-0
          "
        >
          EJI
        </div>

        <div class="leading-tight">
          <div class="text-lg font-extrabold tracking-wide">
            Eka Jaya
          </div>

          <div
            class="
              text-white/70
              text-xs
              font-medium
              uppercase
              tracking-widest
              mt-1
            "
          >
            Beauty Mgmt
          </div>
        </div>
      </div>

      <!-- Headline -->
      <div class="relative z-1">
        <h2 class="text-3xl font-extrabold leading-tight tracking-wide">
          Selamat datang<br>
          kembali.
        </h2>

        <p class="mt-3 text-sm text-white/75 max-w-xs leading-relaxed">
          Masuk untuk mengelola sell-out, klaim, dan laporan dalam satu dashboard.
        </p>
      </div>

      <div class="relative z-1 text-xs text-white/55 tracking-wide">
        &copy; Eka Jaya International
      </div>
    </aside>

    <!-- RIGHT FORM AREA -->
    <div
      class="
        flex-1
        flex
        items-center
        justify-center
        px-6
        py-10
      "
    >
      <mono-shadow-card
        shape="soft"
        bordered
        class="block w-full max-w-md"
      >
        <div class="p-2 sm:p-4 flex flex-col gap-6">
          <!-- Mobile brand -->
          <div class="md:hidden flex items-center gap-3">
            <div
              class="
                w-10
                h-10
                rounded-lg
                text-white
                text-base
                font-black
                flex
                items-center
                justify-center
                shrink-0
                bg-gradient-to-br
                from-blue-950
                via-blue-700
                to-sky-400
              "
            >
              EJI
            </div>

            <div class="leading-tight">
              <div class="text-base font-extrabold text-blue-950">
                Eka Jaya
              </div>

              <div
                class="
                  text-slate-500
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                "
              >
                Beauty Mgmt
              </div>
            </div>
          </div>

          <div>
            <h1
              class="
                text-2xl
                font-extrabold
                uppercase
                tracking-wide
                text-blue-950
              "
            >
              Login
            </h1>

            <p class="mt-1 text-sm text-slate-500">
              Silakan masuk dengan akun Anda.
            </p>
          </div>

          <form
            id="login-form"
            method="POST"
            class="flex flex-col gap-4"
            @submit.prevent="submit"
          >
            <!-- Username -->
            <mono-shadow-input
              id="login-input-username"
              type="text"
              size="md"
              variant="outlined"
              label="Username"
              placeholder="Username"
              autocomplete="username"
              :model-value="fetchAuth.input.username"
              :validation-state="
                fetchAuth.error.username.valid
                  ? 'default'
                  : 'invalid'
              "
              :error-message="fetchAuth.error.username.message"
              @mno-input="
                fetchAuth.input.username =
                  $event.detail.modelValue
              "
              @mno-change="
                fetchAuth.inputValidate().login('username')
              "
            >
              <span
                slot="prefix"
                class="i-mdi-account-outline text-slate-500"
              />
            </mono-shadow-input>

            <!-- Password -->
            <mono-shadow-input
              id="login-input-password"
              :type="showPwd ? 'text' : 'password'"
              size="md"
              variant="outlined"
              label="Password"
              placeholder="••••••••"
              autocomplete="current-password"
              :model-value="fetchAuth.input.password"
              :validation-state="
                fetchAuth.error.password.valid
                  ? 'default'
                  : 'invalid'
              "
              :error-message="fetchAuth.error.password.message"
              @mno-input="
                fetchAuth.input.password =
                  $event.detail.modelValue
              "
              @mno-change="
                fetchAuth.inputValidate().login('password')
              "
            >
              <span
                slot="prefix"
                class="i-mdi-lock-outline text-slate-500"
              />

              <button
                slot="suffix"
                type="button"
                :aria-label="
                  showPwd
                    ? 'Sembunyikan sandi'
                    : 'Tampilkan sandi'
                "
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-0
                  bg-transparent
                  border-0
                  text-slate-500
                  cursor-pointer
                  hover:text-blue-700
                "
                @click="showPwd = !showPwd"
              >
                <span
                  v-show="!showPwd"
                  class="i-mdi-eye text-xl"
                />

                <span
                  v-show="showPwd"
                  class="i-mdi-eye-off text-xl"
                />
              </button>
            </mono-shadow-input>

            <!-- Mock login hint -->
            <div
              class="
                flex
                items-start
                gap-2
                rounded-lg
                border border-blue-100
                bg-blue-50
                px-3
                py-2
                text-xs
                text-blue-900
              "
            >
              <span
                class="i-mdi-information-outline mt-0.5 shrink-0"
              />

              <span>
                Mock login — username
                <code class="font-bold">admin</code>
                atau
                <code class="font-bold">demo</code>, password bebas.
                Data disajikan dari IndexedDB (mock API mono).
              </span>
            </div>

            <!-- Submit -->
            <mono-shadow-button
              id="login-submit"
              type="submit"
              variant="solid"
              color="primary"
              size="lg"
              full-width
              icon-position="right"
              :loading.prop="fetchAuth.loading.login"
            >
              Masuk

              <div
                slot="icon"
                class="i-mdi-login-variant"
              ></div>
            </mono-shadow-button>
          </form>
        </div>
      </mono-shadow-card>
    </div>
  </section>
</template>