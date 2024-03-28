import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router, not Vue
import HomeDashboard from '../views/Home.vue';
import Alerts from '../views/Alerts.vue';
import Reports from '../views/Reports.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeDashboard,
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
