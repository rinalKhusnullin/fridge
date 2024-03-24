import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '../routes';
import type { Router as VueRouter } from 'vue-router';

export const router: VueRouter = createRouter({
    history: createWebHistory('/'),
    sensitive: undefined,
    strict: undefined,
    routes: routes,
});
