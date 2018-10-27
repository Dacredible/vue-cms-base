import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard/index.vue';
import Layout from '@/views/Layout/Layout.vue';

Vue.use(Router);

export const RouterMap = [
    {
        path: '/login',
        component: () => import('@/views/Login/index')
    },
    {
        path: '/404',
        component: () => import('@/views/404')
    },
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                name: 'About',
                component: () => import('@/views/About/index'),
            }
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default new Router({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    routes: RouterMap
});
