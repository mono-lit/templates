import * as yup from "yup"
import type { SchemaObject } from "@mono-host/types/index"
import appConfig from "@mono-host/datas/config"
import { monoToken, monoCookie, monoJwt } from 'mono-utils/runtime'
import { monoRestBaseUrl } from 'mono-utils/fetching'
import { monoStateReset } from 'mono-utils/runtime'
import type { MonoValidateError as ValidateError } from 'mono-utils/runtime'

export const useAuthStore = defineStore('use-auth-store-mono-host', () => {

  const router = useRouter()
  // NB: don't call `useRoute()` at store setup — this store is also instantiated
  // inside the global route middleware (via the auth guards), and `useRoute()` in
  // middleware warns ("may lead to misleading results"). `useRouter()` is safe
  // there; read the current route off `router.currentRoute` where needed.
  const slTkn = monoToken()
  const { validateAllSchema, validateSchema, notif } = useHostHelper()


  interface InputLogin {
    username: string;
    password: string;
    database: string;
  }

  const data = ref<any[]>([])

  const group = ref<string>('')
  const cookie = monoCookie()
  const jwt = monoJwt()

  const resetValue: (keyof InputLogin)[] = ['username', 'password', 'database']
  const loading = ref<{
    login: boolean;
    logout: boolean;
    select: boolean;
    changePassword: boolean;
    message: boolean;
  }>({
    login: false,
    logout: false,
    select: false,
    changePassword: false,
    message: false
  })

  const logoutModal = ref<boolean>(false)

  const input = ref<InputLogin>({ username: "", password: "", database: "EJI" })

  const error = ref<ValidateError<InputLogin>>({
    username: { valid: true, message: '' },
    password: { valid: true, message: '' },
    database: { valid: true, message: '' },
  })


  const schema = yup.object().shape<SchemaObject<InputLogin>>({
    username: yup.string().required("Harus diisi!"),
    password: yup.string().required("Harus diisi!"),
    database: yup.string().required("Harus dipilih!"),
  });



  /**
   * Refresh on demand — used by the route guards and the expiry watcher, which have to
   * mint the refresh cookie BEFORE any API call goes out (right after login, or when the
   * cookie has lapsed). API calls themselves no longer need this: mono now drives esw's
   * automatic refresh from `fetching.auth.requestRefreshTokenRequest`.
   *
   * Every parameter below comes from that same config block, so the manual and automatic
   * paths can't drift apart. The Authorization header and `username` body are added here
   * because sltoken's raw `fetch()` doesn't inject them — esw's automatic path does.
   */
  let refetchRefreshToken = async ({ token: tkn }: { token?: string } = {}) => {

    const token = tkn || cookie.get(appConfig.authCookie.jwt, true)

    if (token) {

      const decodeToken = jwt.cookieDecode<{ USER_NAME: string }>({ token: token })
      const refreshRequest = appConfig.fetching?.auth?.requestRefreshTokenRequest

      const refreshTokenFetch = await slTkn.fetch<{ Expired: number, RefreshToken: string }>({
        name: String(refreshRequest?.name ?? appConfig.authCookie.jwtRefresh),
        path: refreshRequest?.path ?? { milis: 'Expired', value: 'RefreshToken' },
        splitCookie: refreshRequest?.splitCookie,
        fetchParams: {
          options: {
            ...refreshRequest?.fetchParams?.options,
            method: 'POST',
            baseUrl: refreshRequest?.fetchParams?.options?.baseUrl ?? monoRestBaseUrl('monoHostRest'),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: decodeToken?.USER_NAME }),
            unauthCall: () => {
              router.push('/')
            }
          },
          url: String(refreshRequest?.fetchParams?.url ?? '/Auth/RefreshToken')
        }
      })
      return refreshTokenFetch
    }

    return null

  }

  /**
  * Fetching post login yang akan mengarahkan user ke halaman dashboard setelah sukses login
  */
  let fetchPostLogin = async (): Promise<void> => {
    //validasikan semua inputan login

    loading.value.login = false
    loading.value.message = false
    await validateAllSchema({ schema, input: input.value, error: error.value }, async () => {

      loading.value.login = true
      loading.value.message = true
      resetValue.forEach((e) => {
        error.value[e].valid = true
        error.value[e].message = ''
      })

      const tokenFetch = await slTkn.fetch({
        name: appConfig.authCookie.jwt,
        path: { milis: 'Expired', value: 'Token' },
        splitCookie: true,
        fetchParams: {
          options: {
            method: 'POST',
            body: JSON.stringify({
              username: String(input.value.username),
              password: String(input.value.password),
              companydb: String(input.value.database)
            }),
            baseUrl: monoRestBaseUrl('monoHostRest'),
            callback: ({ message, statusCode, all }) => {
              if (statusCode != 200) {
                loading.value.login = false
                loading.value.message = false
                notif({ message: String(message) ?? 'Terjadi kesalahan, pastikan semua inputan sesuai!', type: 'error' })
              }
            },
            unauthCall: async () => {
              loading.value.login = false
              loading.value.message = false
              await router.push('/')
            }
          },
          url: '/Auth/Login',
        }
      })


      if (!tokenFetch.response?.Token) {
        loading.value.login = false
        loading.value.message = false
      }

      if (tokenFetch.response?.Token) {
        loading.value.login = false
        loading.value.message = false
        input.value.password = ''
        input.value.username = ''

        // Store the refresh-token cookie (ESW_tokenRefresh) right after a
        // successful login. In esw-host this is written by the `auth.ts` route
        // guard on first navigation to a protected page; mono-host's router
        // guard is disabled, so we fetch + persist it here instead. Wrapped so a
        // refresh failure never blocks the login redirect.
        try {
          await refetchRefreshToken({ token: tokenFetch.response?.Token })
        } catch (e) {
        }


        const isRedirectPath = router.currentRoute.value.query.redirect ? String(router.currentRoute.value.query.redirect) : '/home'

        notif({ type: 'success', message: 'Anda berhasil login!' })
        window.location.assign(isRedirectPath)

        // await router.push(isRedirectPath)


      }


    })

  }

  /**
  * Fetching post logout yang akan mengakhiri session login user
  */
  let fetchPostLogout = async () => {
    loading.value.logout = true

    if (cookie.get(appConfig.authCookie.jwt, true)) {

      cookie.remove(appConfig.authCookie.jwt, true)
      cookie.remove(appConfig.authCookie.jwtRefresh)

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
    group,
    fetching,
    error,
    data,
    inputValidate,
    schema,
    loading,
    logoutModal,
    refetchRefreshToken
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
