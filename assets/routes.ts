import * as VueRouter from "vue-router";
import Welcome from "Pages/Welcome.vue";
import Login from "Pages/Login.vue";
import Registration from "Pages/Registration.vue";
import MyProducts from "Pages/MyProducts.vue";
import MyRecipes from "Pages/MyRecipes.vue";
import SharedRecipes from "Pages/SharedRecipes.vue";
import PageNotFound from "Pages/PageNotFound.vue";

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
