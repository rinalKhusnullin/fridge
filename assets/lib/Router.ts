import { createRouter, createWebHistory } from 'vue-router';
import type { Router as VueRouter } from 'vue-router';
import { routes } from '@/routes';

export const router: VueRouter = createRouter({
    history: createWebHistory('/'),
    sensitive: undefined,
    strict: undefined,
    routes: routes,
});
