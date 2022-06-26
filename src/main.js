import { createApp } from 'vue'
import App from './App.vue'

// import after init
import router from "./router/index";
import '@/assets/styles/mainReset.css'
import { createPinia } from 'pinia'


createApp(App).use(router).use(createPinia()).mount('#app')
