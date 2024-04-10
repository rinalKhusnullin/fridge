import * as VueRouter from "vue-router";
import MyRecipes from "./vue/pages/MyRecipes.vue";
import SharedRecipes from "./vue/pages/SharedRecipes.vue";
import PageNotFound from "./vue/pages/PageNotFound.vue";
import MyProducts from "./vue/pages/MyProducts.vue";
import Registration from "./vue/pages/Registration.vue";
import Login from "./vue/pages/Login.vue";
import Welcome from "./vue/pages/Welcome.vue";

export const routes: VueRouter.RouteRecordRaw[] = [];

routes.push({
   path: '/',
   name: 'my-products',
   // @ts-ignore
   component: MyProducts,
});

routes.push({
    path: '/recipes',
    name: 'my-recipes',
    // @ts-ignore
    component: MyRecipes,
});

routes.push({
   path: '/edamam/recipes',
    name: 'shared-recipes',
    // @ts-ignore
   component: SharedRecipes,
});

routes.push({
    path: '/login',
    name: 'login',
    // @ts-ignore
    component: Login,
});

routes.push({
    path: '/registration',
    name: 'registration',
    // @ts-ignore
    component: Registration,
});

routes.push({
    path: '/welcome',
    name: 'welcome',
    // @ts-ignore
    component: Welcome,
});


// 404 page
routes.push({
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    // @ts-ignores
    component: PageNotFound,
});