<template>
  <div id="app">
    <!-- Header -->
    <header class="main-header">
      <div class="logo-container">
        <div class="logo-circle">
          <img src="/favicon.ico" alt="VoyageConnect Logo" class="logo" />
        </div>
        <!-- naslov stranice -->
        <h1 class="site-name">VoyageConnect</h1>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="/home">Početna</a></li>
          <li><a href="/istraži">Istraži</a></li>
          <li><a href="/profil">Profil</a></li>
          <li><a href="/o-nama">O nama</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/informacije">Informacije</a></li>
          <li><a href="/odjava">Odjava</a></li>
        </ul>
      </nav>
    </header>

    <!-- glavni sadržaj -->
    <router-view></router-view> <!-- rute -->

    <!-- Footer -->
    <footer class="main-footer">
      <p>&copy; 2025 VoyageConnect. Sva prava pridržana.</p>
      <ul class="footer-links">
        <li><a href="/uvjeti-koristenja">Uvjeti korištenja</a></li>
        <li><a href="/politika-privatnosti">Politika privatnosti</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #add8e6; /* Baby plava boja */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px; 
}

.logo-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 30px;
  height: 30px;
}

.site-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.main-nav li {
  font-size: 1rem;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #000;
}

/* Footer */
.main-footer {
  background-color: #add8e6;
  color: #333;
  text-align: center;
  padding: 10px 20px;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.main-footer p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
  margin: 5px 0 0 0;
}

.footer-links a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #000;
}
</style>
