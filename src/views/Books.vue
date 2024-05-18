  <script setup>
  import books from "@/data/books";
  import Category from "@/components/Category.vue";
  import Cards from "@/components/Cards.vue";
</script>

<template>
  <div>
    <Category icon="tabler:books" title="מאגרי ספרים" about="כאן מרוכזים מבחר מאגרי ספרים " />
    <Cards :sites="books" imgFullback="logos/TablerBooks.svg" />
  </div>
</template>


