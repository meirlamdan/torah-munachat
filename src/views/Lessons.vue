<script setup>
import AboutCategory from "../components/AboutCategory.vue";
import siteCard from "../components/siteCard.vue";
import lessons from "@/data/lessons";
</script>


<template>
  <about-category
    icon="tabler:microphone-2"
    title="שיעורים  ודרשות"
    about="כאן מרוכזים אתרים עם שיעורים והרצאות בכל מקצועות התורה "
  />
  <div class="container">
    <site-card v-for="(item, i) in lessons" :key="i" v-bind="item" />
  </div>
</template>

<style></style>
