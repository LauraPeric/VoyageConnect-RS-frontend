<template>
    <div class="homepage">
      <div class="auth-container">
        <div class="form-card">
          <h2>{{ isLogin ? "Login to Your Account" : "Register Your Account" }}</h2>
          <form @submit.prevent="isLogin ? handleLogin() : handleRegister()">
            <div v-if="!isLogin">
              <label for="username">Username</label>
              <input
                id="username"
                v-model="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">{{ isLogin ? "Login" : "Register" }}</button>
          </form>
          <p>
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <span @click="toggleMode">{{ isLogin ? "Register" : "Login" }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AuthPage",
    data() {
      return {
        isLogin: true, // početno stanje je login
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      toggleMode() {
        this.isLogin = !this.isLogin; // prebacivanje između login i register modova
        this.username = "";
        this.email = "";
        this.password = "";
      },
      async handleLogin() {
  try {
    alert("Login successful!");
    this.$router.push("/home"); // navigiraj na home stranicu
  } catch (error) {
    console.error(error);
    alert("Login failed!");
  }
      },
      async handleRegister() {
        try {
          // potrebno dodati svoj register
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


html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('@/assets/poz.jpg') no-repeat center center/cover;
}

.auth-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.form-card {
  display: flex;
  flex-direction: column;
}

form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 1rem;
}

span {
  color: #4caf50;
  cursor: pointer;
  text-decoration: underline;
}

  </style>
  