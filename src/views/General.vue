<script setup>
import siteCard from "../components/siteCard.vue";
import general from "@/data/general";
import AboutCategory from "../components/AboutCategory.vue";
</script>

<template>
  <about-category icon="tabler:apps" title="פרויקטים תורניים" about="כאן מרוכזים מגוון פרויקטים תורניים " />
  <div class="container">
    <site-card v-for="(item, i) in general" :key="i" v-bind="item" />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
