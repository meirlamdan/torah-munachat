<script setup>
import { Icon } from '@iconify/vue';

const links = [
  { name: 'מאגרי ספרים', path: '/', icon: 'tabler:books' },
  { name: 'שיעורים ודרשות', path: '/lessons', icon: 'material-symbols:adaptive-audio-mic-rounded' },
  { name: 'פרויקטים תורניים', path: '/general', icon: 'tabler:apps' },
  { name: 'אודות', path: '/about', icon: 'tabler:info-circle' }
]
</script>

<template>
  <div class="bg-slate-50 min-h-screen flex flex-col">
    <div class="bg-gradient-to-b from-white to-slate-200 p-8">
      <header>
        <div class="text-center">
          <h1 class="text-4xl font-bold text-slate-800">תורה מונחת</h1>
          <h3 class="text-xl text-slate-600 mt-2">תורה מונחת בקרן זוית כל הרוצה יבוא ויטול <small class="text-slate-500">(קידושין סו)</small></h3>
        </div>
      </header>
      <nav class="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-8">
        <router-link :to="path" v-for="({ name, path, icon }) in links" :key="path" class="transition-colors duration-150 hover:text-slate-700">
          <div class="flex items-center gap-2">
            <Icon :icon style="font-size: 24px" />
            <span>{{ name }}</span>
          </div>
        </router-link>
      </nav>
    </div>
    <div class="mx-auto container flex-1 pb-10">
      <router-view />
    </div>
    <footer class="text-center text-slate-400 text-sm py-4 border-t border-slate-200">
      <a href="https://github.com/meirlamdan/torah-munachat" class="inline-flex items-center gap-1 hover:text-slate-600 transition-colors duration-150">
        <img src="https://github.com/favicon.ico" alt="github" width="16" height="16" />
        <span>מ.ל</span>
      </a>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: 600;
  border-bottom: 2px solid #475569;
}
</style>
