import { createApp } from 'vue';
import App from './App.vue';
import AppLayout from './layouts/__Constructor__.vue';

import '@/assets/stylus/globals.styl';

const init = async () => {
  const router = await (await import('vue-pages-router')).default;
  createApp(App).component('Layout', AppLayout).use(router).mount('#app');
};

init();
