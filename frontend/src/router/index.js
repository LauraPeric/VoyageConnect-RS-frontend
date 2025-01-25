import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "../components/AuthPage.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  {
    path: "/", // Login/Registracija
    name: "auth",
    component: AuthPage,
  },
  {
    path: "/home", // Početna stranica nakon prijave
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
