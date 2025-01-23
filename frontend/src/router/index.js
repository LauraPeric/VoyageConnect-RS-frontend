import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';  // promjena imena komponente

const routes = [
  {
    path: '/login', 
    name: 'login',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
