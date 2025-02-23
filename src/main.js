import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import en from './lang/en.json'
import de from './lang/de.json'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'de',
    messages: {
        en,
        de
    }
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(i18n)

app.mount('#app')
