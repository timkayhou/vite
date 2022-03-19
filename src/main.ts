import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import router from './router'
//@ts-ignore
import store from './store'


createApp(App).use(router).use(store).mount('#app')
