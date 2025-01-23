<template>
  <div id="app">
    <router-view></router-view> <!-- Ovdje će se prikazivati rute (stranice) koje si definirao -->
  </div>
</template>

<script>
// Neće ti biti potrebno HelloWorld komponenta za sada, osim ako nije dio aplikacije
import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/UserLogin.vue'; // Provjeri da je komponenta Login ispravno importirana
import Register from './components/UserRegister.vue'; // Provjeri da je komponenta Register ispravno importirana

// Definiraj rute
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login, // Kada posjetiš /login, prikazuje Login komponentu
  },
  {
    path: '/register',
    name: 'register',
    component: Register, // Kada posjetiš /register, prikazuje Register komponentu
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // poveži rute s routerom
});

export default {
  name: 'App',
  router, // poveži router s aplikacijom
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
