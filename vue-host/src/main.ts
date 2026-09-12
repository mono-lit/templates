import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import {createSentryPiniaPlugin, setUser, init, browserTracingIntegration, replayIntegration} from "@sentry/vue"
import 'virtual:uno.css'
import 'mono-helper/ui/index.css'
import 'notivue/notifications.css'
import 'notivue/animations.css'
import { createNotivue } from 'notivue'
import App from './App.vue'
import router from './router'
import { monoJwt } from 'mono-utils/runtime'
import { createMono } from 'mono-utils/runtime'
import monoConfig from '../mono.config'
import appConfig from '@vue-host/datas/appConfig.ts'

const app = createApp(App)

if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {

    // The mock-login payload minted by `createMockJwtHost` — ID / USERNAME / NAME.
    const jwt = monoJwt().cookieDecode<{ ID?: number | string; USERNAME?: string; NAME?: string }>({ cookie: appConfig.authCookie.jwt, splitCookie: true })

    const host = window.document.location.hostname

    const id = jwt?.ID;
    const username = jwt?.USERNAME || jwt?.NAME;

    init({
        app,
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            browserTracingIntegration({ router }),
            replayIntegration(),
        ],
        sendDefaultPii: true,
        // No API trace-propagation target: the mock backend lives in IndexedDB,
        // no request ever leaves the page.
        tracePropagationTargets: [host],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });

    if (id || username) {
        setUser({
            id: id ? String(id) : undefined,
            username: username || undefined,
            ip_address: '{{auto}}'
        })
    } else {
        setUser(null); // clear if unknown
    }
}


const notivue = createNotivue({
    //@ts-ignore
    position: 'top-right',
    pauseOnHover: true,
    avoidDuplicates: true,
    limit: 4,
    notifications: {
        global: {
            duration: 2000
        }
    }
})

const head = createHead()

const pinia = createPinia()

pinia.use(createSentryPiniaPlugin())

app.use(createMono(monoConfig))
app.use(router)
app.use(notivue)
app.use(head)
app.use(pinia)
app.mount('#app')
