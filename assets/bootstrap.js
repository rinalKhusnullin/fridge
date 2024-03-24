import { createApp } from 'vue';
import App from './vue/App.vue';
import { router } from './lib/router';

const app = createApp(App, {})
    .use(router)
    .mount('#app')
;
