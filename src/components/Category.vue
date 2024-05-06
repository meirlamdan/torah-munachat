<script setup>
import { Icon } from '@iconify/vue';
defineProps(['icon', 'title', 'about'])
</script>

<template>
  <div class='text-center bg-white my-10 p-6 rounded-lg'>
    <Icon :icon="icon" class="mx-auto text-6xl text-slate-500" />
    <h3 class='text-xl font-semibold mt-4 mb-2 text-gray-800'>{{ title }}</h3>
    <p class='text-gray-600'>{{ about }}</p>
  </div>
</template>