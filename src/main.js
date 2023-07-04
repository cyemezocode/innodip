import { createApp } from 'vue'
import App from './App.vue'
/* eslint-disable */
// import CSS

import './assets/css/app.css'

// import router
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')