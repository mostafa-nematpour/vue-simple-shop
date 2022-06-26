import { createApp } from 'vue'
import App from './App.vue'

// import after init
import router from "./router/index";


createApp(App).use(router).mount('#app')
