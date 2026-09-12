import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { createHead } from '@unhead/vue/client'
import 'virtual:uno.css'
import 'mono-helper/ui/index.css'
import { createNotivue } from 'notivue'
import { createMono } from 'mono-utils/runtime'
import monoConfig from '../mono.config'
import 'notivue/notifications.css'
import 'notivue/animations.css'

const notivue = createNotivue({
    position: 'top-right',
    pauseOnHover: true,
    limit: 4,
    notifications: {
        global: {
            duration: 2000
        }
    }
})

const pinia = createPinia()
const app = createApp(App)
const head = createHead()

app.use(notivue)
app.use(head)
app.use(pinia)
app.use(router)
app.use(createMono(monoConfig))
app.mount('#app')