<script setup>
import AboutCategory from "../components/Category.vue";
import CardS from "../components/Cards.vue";
import lessons from "@/data/lessons";
</script>


<template>
  <div>
    <about-category icon="material-symbols:adaptive-audio-mic-rounded" title="שיעורים  ודרשות"
      about="כאן מרוכזים אתרים עם שיעורים והרצאות בכל מקצועות התורה " />
    <CardS :sites="lessons" />
  </div>
</template>

<style></style>
