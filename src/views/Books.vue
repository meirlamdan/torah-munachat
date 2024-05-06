  <script setup>
  import siteCard from "../components/siteCard.vue";
  import books from "@/data/books";
  import AboutCategory from "../components/AboutCategory.vue";
  </script>

<template>
  <about-category
    icon="tabler:books"
    title="מאגרי ספרים"
    about="כאן מרוכזים מבחר מאגרי ספרים "
  />
  <div class="container">
    <site-card v-for="(item, i) in books" :key="i" v-bind="item" />
  </div>
</template>


<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
