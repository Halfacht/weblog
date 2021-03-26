import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import CreateBlog from "./views/blogs/Create.vue";

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
        path: "/blogs/create",
        name: "blogs.create",
        component: CreateBlog,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;
