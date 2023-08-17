import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import Pagination from '@/utils/Pagination.vue';

import '@/assets/scss/reset.scss';
import '@/assets/scss/main.scss';
import '@/assets/scss/_pagination.scss';

createApp(App).use(router).component('v-pagination', Pagination).mount('#app');
