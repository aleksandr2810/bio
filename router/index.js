import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/products",
		name: "products",
		component: () =>
			import(/* webpackChunkName: "products" */ "../views/ProductsList.vue"),
	},
	{
		path: "/product/:productId",
		name: "product",
		component: () =>
			import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
	},
	{
		path: "/guarantee",
		name: "guarantee",
		component: () =>
			import(/* webpackChunkName: "guarantee" */ "../views/GuaranteeView.vue"),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () =>
		import(/* webpackChunkName: "notFound" */ "../components/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
