import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
