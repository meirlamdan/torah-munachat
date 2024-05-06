  <script setup>
  import books from "@/data/books";
  import AboutCategory from "../components/Category.vue";
  import Cards from "@/components/Cards.vue";
</script>

<template>
  <div>
    <about-category icon="tabler:books" title="מאגרי ספרים" about="כאן מרוכזים מבחר מאגרי ספרים " />
    <Cards :sites="books" />
  </div>
</template>


