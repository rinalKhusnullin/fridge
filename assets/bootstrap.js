import { createApp } from 'vue';
import App from './vue/App.vue';
import { router } from './lib/router';
import { createHead } from "unhead";

const app = createApp(App, {})
    .use(router)
    .use(createHead())
    .mount('#app')
;
