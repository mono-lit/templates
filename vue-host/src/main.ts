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
import {  monoJwt } from 'mono-utils/runtime'
import { type JWTCompleteTokenTypes } from 'mono-utils/config'
import { createMono } from 'mono-utils/runtime'
import { monoConfigureFetching } from 'mono-utils/fetching'
import monoConfig from '../mono.config'
import appConfig from '@mono-host/datas/config'

const app = createApp(App)

if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {

    const jwt = monoJwt().cookieDecode<JWTCompleteTokenTypes>({ cookie: appConfig.authCookie.jwt, splitCookie: true })

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    function createRegexFromURL(url: string) {
        // Escape special characters in the URL
        const escapedURL = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Create the regular expression pattern
        const regexPattern = `^${escapedURL}`;
        // Create the regular expression object
        const regex = new RegExp(regexPattern);
        return regex;
    }

    const host = window.document.location.hostname

    const id = jwt?.USER_ID;
    const username = jwt?.NAME;
    const email = jwt?.USER_NAME;

    init({
        app,
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            browserTracingIntegration({ router }),
            replayIntegration(),
            // httpClientIntegration({
            //     failedRequestStatusCodes: [[400, 599]],
            //     failedRequestTargets: [host]
            // })
        ],
        sendDefaultPii: true,
        tracePropagationTargets: [host, createRegexFromURL(apiBaseUrl)],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });

    if (id || username || email) {
        setUser({
            id: id ? String(id) : undefined,
            email: email || undefined,
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

// Where a request lands when its token is expired and the automatic refresh
// (fetching.auth.requestRefreshTokenRequest) couldn't save it. It lives here rather than
// in mono.config.ts because it needs the router.
monoConfigureFetching({
    unauthCall: () => {
        router.push('/')
    },
})

app.use(createMono(monoConfig))
app.use(router)
app.use(notivue)
app.use(head)
app.use(pinia)
app.mount('#app')
