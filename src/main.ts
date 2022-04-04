import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import { store } from '@/store'
import AppLayout from './layouts/__LayoutConstructor__.vue'

// Default CSS
import './assets/stylus/globals.styl'

const init = async () => {
  const module = await import('vue-pages-router')
  const router = await module.default
  createApp(App)
    .use(router)
    // .use(store)
    .component('Layout', AppLayout)
    .mount('#app')
}

init()
