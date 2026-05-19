<script setup>
defineProps(['name', 'imgSrc', 'about', 'href','imgFullback'])
</script>

<template>
  <div class="w-full sm:w-72 max-w-xs p-4 text-center flex flex-col items-center rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-slate-100">
    <div class="text-xl min-h-14 mb-2 font-medium">{{ name }}</div>
    <div class="h-14">
      <img :src="imgSrc|| `${href}/favicon.ico`" :onerror="`this.src='${imgFullback}'`" :alt="name" class="mx-auto h-full max-w-60" />
    </div>
    <div class="line-clamp-5 text-sm text-slate-600 my-4 flex-1">
      {{ about }}
    </div>
    <a class="text-white text-sm font-medium bg-slate-500 hover:bg-slate-600 transition-colors duration-150 py-1.5 px-5 rounded-full" :href="href"
      target="_blank">עבור לאתר</a>
  </div>
</template>
