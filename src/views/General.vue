<script setup>
import Card from "@/components/Cards.vue";
import general from "@/data/general";
import Category from "@/components/Category.vue";
</script>

<template>
  <div>
    <Category icon="tabler:apps" title="פרויקטים תורניים" about="כאן מרוכזים מגוון פרויקטים תורניים " />
    <Card :sites="general" />
  </div>
</template>
