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
  <div class="bg-slate-50 min-h-screen pb-10">
    <div class="bg-slate-200 p-8">
      <header>
        <div class="text-center">
          <h1 class="text-4xl font-bold">תורה מונחת</h1>
          <h3 class="text-2xl"> תורה מונחת בקרן זוית כל הרוצה יבוא ויטול <small>(קידושין סו)</small> </h3>
        </div>
      </header>
      <div class="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-8">
        <router-link :to="path" v-for="({ name, path, icon }) in links" :key="path">
          <div class="flex items-center gap-2 hover:text-slate-600 :hover:underline">
            <Icon :icon style="font-size: 24px" />
            <span>{{ name }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="mx-auto container">
      <router-view />
    </div>
    <!-- <footer>
      <div>
        <p>מ.ל <a href="https://github.com/meirlamdan/torah-munachat"><img src="https://github.com/favicon.ico"
              alt="github" width="24" height="24"></a></p>
      </div>
    </footer> -->
  </div>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: 600;
}
</style>
