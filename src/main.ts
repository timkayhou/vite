import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import store from './store'

createApp(App).use(store).mount('#app')
