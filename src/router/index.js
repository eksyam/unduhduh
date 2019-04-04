import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	linkExactActiveClass: 'exact-active',
	linkActiveClass: 'active',
	// base: process.env.BASE_URL,
	// scrollBehavior: (to, from, savedPosition) => {
	// 	if (savedPosition) {
	// 		return savedPosition;
	// 	}

	// 	return { x: 0, y: 0 };
	// },
	routes: [
	// {
	// 	path: '/auth',
	// 	component: () => import('@/views/layout/Auth.vue'),
	// 	beforeEnter: isUnauth,
	// 	children: [
	// 	{
	// 		path: 'login',
	// 		name: 'login',
	// 		component: () => import('@/views/auth/Login.vue'),
	// 	},
	// 	],
	// },
	{
		path: '/',
		component: () => import('@/views/Main.vue'),
		// beforeEnter: isAuth,
		children: [
		{
			path: '/',
			name: 'beranda',
			component: () => import('@/views/Beranda.vue'),
		},
		{
			path: '/youtube',
			name: 'youtube',
			component: () => import('@/views/layout/Youtube.vue'),
		},
		{
			path: '/instagram',
			name: 'instagram',
			component: () => import('@/views/layout/Instagram.vue'),
		},
		],
	},
	],
});

export default router;