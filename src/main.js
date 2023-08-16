import { createApp } from 'vue'
import App from './App.vue'
/* eslint-disable */
// import CSS

import './assets/css/app.css'
import VOtpInput from "vue3-otp-input";

import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "jszip"
import "datatables.net-buttons-bs4"
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
import "datatables.net-buttons/js/buttons.colVis"
import "datatables.net-buttons/js/buttons.flash"
import "datatables.net-buttons/js/buttons.html5"
import "datatables.net-buttons/js/buttons.print"
// import router
import router from './router'
const app = createApp(App)
app.use(router)
app.component('v-otp-input', VOtpInput)
app.mount('#app')