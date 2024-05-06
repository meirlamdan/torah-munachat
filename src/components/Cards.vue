<script setup>
import Card from '@/components/Card.vue';
defineProps(['sites'])
</script>

<template>
  <div class="flex justify-center gap-x-8 gap-y-10 flex-wrap">
    <Card v-for="(item, i) in sites" :key="i" v-bind="item" />
  </div>
</template>

<style scoped></style>