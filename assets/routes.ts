import * as VueRouter from "vue-router";
import Home from './vue/pages/Home.vue';
import PageNotFound from "./vue/pages/PageNotFound.vue";
import About from "./vue/pages/About.vue";

export const routes: VueRouter.RouteRecordRaw[] = [];

routes.push({
    path: '/',
    name: 'home',
    // @ts-ignore
    component: Home,
});

routes.push({
   path: '/about',
    name: 'about',
    // @ts-ignore
   component: About,
});



// 404 page
routes.push({
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    // @ts-ignores
    component: PageNotFound,
});