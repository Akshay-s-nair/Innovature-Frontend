import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeS.vue';
import Register from '../components/RegisterS.vue';
import Login from '../components/LoginS.vue';
import Calculator from '../components/CalculatorS.vue';
import Logout from '../components/LogoutS.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/calculator', name: 'Calculator', component: Calculator, meta: { requiresAuth: true } },
  { path: '/logout', name: 'Logout', component: Logout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {
    window.alert("Login first");
    next('/login');
  } else {
    next();
  }
});

export default router;
