<template>
  <about-category
    icon="mic_external_on"
    title="שיעורים  ודרשות"
    about="כאן מרוכזים אתרים עם שיעורים והרצאות בכל מקצועות התורה "
  />
  <div class="container">
    <site-card v-for="(item, i) in lessons" :key="i" v-bind="item" />
  </div>
</template>

<script>
import AboutCategory from "../components/AboutCategory.vue";
import siteCard from "../components/siteCard.vue";
import { lessons } from "../Lessons";
export default {
  components: { siteCard, AboutCategory },
  setup() {
    return { lessons };
  },
};
</script>

<style></style>
