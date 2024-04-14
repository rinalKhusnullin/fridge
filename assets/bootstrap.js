import { createApp } from 'vue';
import App from "Vue/App.vue";
import { router } from 'Lib/Router';
import { createHead } from "unhead";

const app = createApp(App, {})
    .use(router)
    .use(createHead())
    .mount('#app')
;
