<template>
  <about-category
    icon="menu_book"
    title="מאגרי ספרים"
    about="כאן מרוכזים מבחר מאגרי ספרים "
  />
  <div class="container">
    <site-card v-for="(item, i) in books" :key="i" v-bind="item" />
  </div>
</template>

<script>
import siteCard from "../components/siteCard.vue";
import { books } from "../Books";
import AboutCategory from "../components/AboutCategory.vue";
export default {
  components: { siteCard, AboutCategory },
  setup() {
    return { books };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
