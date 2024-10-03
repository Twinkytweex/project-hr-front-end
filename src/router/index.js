import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormsView from '../views/FormsView.vue';
import LeaveFormView from '@/views/LeaveFormView.vue';
import Success from '@/components/Success.vue';
import CompanyView from '@/views/CompanyView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/form/:id/',
		name: 'form',
		component: FormsView,
	},
	{
		path: '/Leaveform/',
		name: 'Leaveform',
		component: LeaveFormView,
	},
	{
		path: '/success/',
		name: 'success',
		component: Success,
	},
	{
		path: '/company/:id/',
		name: 'company',
		component: CompanyView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.afterEach(() => {
	setTimeout(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, 500);
});

export default router;
