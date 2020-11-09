import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/listitems',
        name: 'ListItems',
        component: () => import('../views/Catalog-lists.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../components/cart/Cart'),
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
