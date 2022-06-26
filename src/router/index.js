import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/Home.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error404",
        component: () => import("@/pages/Error404.vue"),
    },
    {
        path: "/product-list",
        name: "productList",
        component: () => import("@/pages/ProductList.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path === from.path) {
            return { x: window.scrollX, y: window.scrollY }
        }
        document.getElementById('app').scrollIntoView();
        return { x: 0, y: 0 }
    },
});

export default router;
