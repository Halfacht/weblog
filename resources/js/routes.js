import {createRouter, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Dashboard from './views/Dashboard';
import CreateBlog from "./views/blogs/Create.vue";
import ShowBlog from "./views/blogs/Show.vue";
import CreateCategory from './views/categories/Create.vue';
import NewsletterSubscription from "./views/subscriptions/NewsletterSubscription";
import Subscription from "./views/subscriptions/Subscription";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: "/blogs/create",
        name: "blogs.create",
        component: CreateBlog,
    },
    {
        path: "/blogs/:id/edit",
        name: "blogs.edit",
        component: CreateBlog,
        props: true,
    },
    {
        path: "/blogs/:id",
        name: "blogs.show",
        component: ShowBlog,
        props: true,
    },
    {
        path: "/categories/create",
        name: "categories.create",
        component: CreateCategory,
    },
    {
        path: "/newsletter-subscription",
        name: "newsletter-subscription",
        component: NewsletterSubscription
    },
    {
        path: "/subscription",
        name: "subscription",
        component: Subscription,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;
