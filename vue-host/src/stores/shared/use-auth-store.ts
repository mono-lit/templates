import * as yup from "yup"
import type { SchemaObject } from "@vue-host/types/index"
import { createMockJwtHost } from "@vue-host/utils/mock-jwt"
import { monoToken, monoCookie, monoStateReset, monoState } from 'mono-utils/runtime'
import { monoFetchOdata, monoFetch } from 'mono-utils/fetching'
import { MonoValidateError as ValidateError } from 'mono-utils/runtime'

export const useAuthStore = defineStore('use-auth-store-mono-host', () => {

  const route = useRoute()
  const slTkn = monoToken()
  const cookie = monoCookie()
  const state = monoState()
  const { validateAllSchema, validateSchema, notif } = useHostHelper()


  interface InputLogin {
    username: string;
    password: string;
  }

  interface MockUser {
    Id: number;
    Username: string;
    Name: string;
    LastLogin?: string | null;
  }

  const resetValue: (keyof InputLogin)[] = ['username', 'password']
  const loading = ref<{
    login: boolean;
    logout: boolean;
  }>({
    login: false,
    logout: false
  })

  const logoutModal = ref<boolean>(false)

  const input = ref<InputLogin>({ username: "", password: "" })

  const error = ref<ValidateError<InputLogin>>({
    username: { valid: true, message: '' },
    password: { valid: true, message: '' },
  })


  const schema = yup.object().shape<SchemaObject<InputLogin>>({
    username: yup.string().required("Harus diisi!"),
    password: yup.string().required("Harus diisi!"),
  });



  /**
   * Mock login — no server involved. The backend is the browser's IndexedDB
   * (`mockIndexedDB` in mono.config.ts):
   *
   *  1. look the username up in the `users` entity,
   *  2. push `LastLogin = now` onto that row — the write landing in IndexedDB
   *     IS the login success (watch it change in DevTools → Application →
   *     IndexedDB → mono-host-mock),
   *  3. mint the fake session JWT (`ID` / `USERNAME` / `NAME` payload, see
   *     `createMockJwtHost`) into the auth cookie and reload into the app.
   *
   * Any password passes — this is a template demo, not an auth service.
   */
  let fetchPostLogin = async (): Promise<void> => {
    //validasikan semua inputan login

    loading.value.login = false
    await validateAllSchema({ schema, input: input.value, error: error.value }, async () => {

      loading.value.login = true
      resetValue.forEach((e) => {
        error.value[e].valid = true
        error.value[e].message = ''
      })

      const username = String(input.value.username).trim()
      // escape single quotes for the OData $filter literal
      const usernameEscaped = username.toLowerCase().replace(/'/g, "''")

      // `params` is the documented monoFetchOdata shape (see docs: repo/mock-api)
      // but this mono-utils version types it narrowly — widen it back.
      const fetchUsers = {
        configBaseUrl: 'monoHostOData',
        url: '/users',
        type: 'data' as const,
        params: {
          $filter: `tolower(Username) eq '${usernameEscaped}'`,
          $top: 1,
        },
      } as Parameters<typeof monoFetchOdata<MockUser[]>>[0]

      const { data: users } = await monoFetchOdata<MockUser[]>(fetchUsers)

      const user = users?.[0]

      if (!user) {
        loading.value.login = false
        notif({ message: `Username "${username}" tidak ada di mock data!`, type: 'error' })
        return
      }

      // The login "request": pushing the login timestamp into the mock store.
      // Success of this write = success of the login.
      const pushed = await monoFetch(`/users/${user.Id}`, {
        configBaseUrl: 'monoHostRest',
        method: 'PATCH',
        body: JSON.stringify({ LastLogin: new Date().toISOString() }),
      })

      if (pushed.statusCode >= 400) {
        loading.value.login = false
        notif({ message: String(pushed.message ?? 'Gagal menulis login ke mock data!'), type: 'error' })
        return
      }

      const token = createMockJwtHost({ id: user.Id, username: user.Username, name: user.Name })

      slTkn.add({
        name: String(state.config?.jwt?.token?.name),
        value: token,
        milis: 8 * 60 * 60 * 1000,
        splitCookie: true,
      })

      loading.value.login = false
      input.value.password = ''
      input.value.username = ''

      const isRedirectPath = route.query.redirect ? String(route.query.redirect) : '/home'

      notif({ type: 'success', message: 'Anda berhasil login!' })
      window.location.assign(isRedirectPath)

    })

  }

  /**
   * Fetching post logout yang akan mengakhiri session login user
   */
  let fetchPostLogout = async () => {
    loading.value.logout = true

    if (cookie.get(String(state.config?.jwt?.token?.name), true)) {

      cookie.remove(String(state.config?.jwt?.token?.name), true)

      loading.value.logout = false

      monoStateReset()
      notif({ message: 'Anda berhasil logout!', type: 'success' })

      window.location.assign('/')

    }
  }



  /**
   * Single validasi untuk mengeck inputan login
   */
  let inputValidate = () => {


    let login = async (field: keyof InputLogin): Promise<boolean> => {
      return await validateSchema({ field, schema, input: input.value, error: error.value })
    }



    return {
      login
    }
  }


  /**
   * list fetching data yang tersedia di fetch auth
   */
  let fetching = () => {
    var obj = {
      postLogin: () => fetchPostLogin(),
      postLogout: () => fetchPostLogout(),
    }

    return obj;
  }

  return {
    input,
    fetching,
    error,
    inputValidate,
    schema,
    loading,
    logoutModal
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
