import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormsView from '../views/FormsView.vue';
import LeaveForm from '@/components/LeaveForm.vue';

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
		component: LeaveForm,
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
