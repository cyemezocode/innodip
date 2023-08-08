import { createApp } from 'vue'
import App from './App.vue'
/* eslint-disable */
// import CSS

import './assets/css/app.css'
import VOtpInput from "vue3-otp-input";

// import router
import router from './router'
const app = createApp(App)
app.use(router)
app.component('v-otp-input', VOtpInput)
app.mount('#app')