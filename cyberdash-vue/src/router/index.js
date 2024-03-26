import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Alerts from '../views/Alerts.vue';
import Reports from '../views/Reports.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
