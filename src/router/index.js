import { createRouter, createWebHistory } from 'vue-router';
import ContactDashboard from '../views/ContactDashboard';

const routes = [
  {
    path: '/',
    name: 'ContactDashboard',
    component: ContactDashboard,
  },
  {
    path: '/add',
    name: 'ContactForm',
    component: () => import('../views/ContactForm.vue')
  },
  {
      path: '/edit/:id',
      name: 'ContactForm',
      component: () => import('../views/ContactForm.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
