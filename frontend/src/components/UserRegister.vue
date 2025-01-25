<template>
  <div>
    <h1>User Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import apiClient from "../axios";

export default {
  name: "UserRegister",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await apiClient.post("/register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        alert("Registration successful!");
      } catch (error) {
        console.error(error);
        alert("Registration failed!");
      }
    },
  },
};
</script>

<style scoped>
</style>
