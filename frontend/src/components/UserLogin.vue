<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import apiClient from "../axios";

export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await apiClient.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        alert("Login successful!");
      } catch (error) {
        console.error(error);
        alert("Login failed!");
      }
    },
  },
};
</script>

  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  input {
    padding: 8px;
    font-size: 1em;
  }
  
  button {
    padding: 10px;
    font-size: 1.1em;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  