<script setup>
import Category from "@/components/Category.vue";
import Cards from "@/components/Cards.vue";
import lessons from "@/data/lessons";
</script>


<template>
  <div>
    <Category icon="material-symbols:adaptive-audio-mic-rounded" title="שיעורים  ודרשות"
      about="כאן מרוכזים אתרים עם שיעורים והרצאות בכל מקצועות התורה " />
    <Cards :sites="lessons" imgFullback="logos/MaterialSymbolsAdaptiveAudioMicRounded.svg" />
  </div>
</template>

<style></style>
