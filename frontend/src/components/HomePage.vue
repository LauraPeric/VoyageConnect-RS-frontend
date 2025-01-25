<template>
    <div class="home">
      <h1>Dobrodošli u VoyageConnect</h1>
      <p>Povežite se, istražujte i dijelite iskustva!</p>
  
      <div class="cards">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <img :src="card.img" alt="Slika">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { img: "https://img.freepik.com/free-photo/woman-standing-pond-with-colorful-fish-tirta-gangga-water-palace-bali-indonesia_335224-358.jpg?t=st=1737771275~exp=1737774875~hmac=ee360c51d62a85b5910c01bceb321d140fa63a2f43186d4239967ba46fa5c686&w=996", title: "Azija", description: "" },
          { img: "https://s1.it.atcdn.net/wp-content/uploads/2015/05/Ultimate-travel-experience-Europe-800x600.jpg", title: "Europa", description: "" },
          { img: "https://theworldpursuit.com/wp-content/uploads/2019/01/Africa-Travel-Tips-1484x989.jpg", title: "Afrika", description: "" },
        ],
      };
    },
  };
  </script>
  
  <style>
  .home {
    text-align: center;
    padding: 2rem;
  }
  
  .cards {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    width: 200px;
  }
  
  .card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  