<script setup>
import { Icon } from '@iconify/vue';

const links = [
  { name: 'מאגרי ספרים', path: '/', icon: 'tabler:books' },
  { name: 'שיעורים ודרשות', path: '/lessons', icon: 'tabler:microphone-2' },
  { name: 'פרויקטים תורניים', path: '/general', icon: 'tabler:apps' },
  { name: 'אודות', path: '/about', icon: 'tabler:info-circle' }
]
</script>

<template>
  <header>
    <div>
      <h1>תורה מונחת</h1>
      <h3> תורה מונחת בקרן זוית כל הרוצה יבוא ויטול <small>(קידושין סו)</small> </h3>
    </div>
  </header>
  <div id="nav">
    <router-link :to="path" v-for="({ name, path, icon }) in links" :key="path">
      <div class="flex items-center gap-2">
        <Icon :icon style="font-size: 30px" />
        <span>{{ name }}</span>
      </div>
    </router-link>
    <!-- <router-link to="/lessons">
      <div class="flex items-center gap-2">
        <IconBooks :size="30" />
        <span>שיעורים ודרשות</span>
      </div>
    </router-link>
    <router-link to="/general">
      <div class="flex items-center gap-2">
        <IconBooks :size="30" />
        <span>שונות</span>
      </div>
    </router-link>
    <router-link to="/about">
      <div class="flex items-center gap-2">
        <IconBooks :size="30" />
        <span>אודות</span>
      </div>
    </router-link> -->
  </div>
  <router-view />
  <footer>
    <div>
      <p>מ.ל <a href="https://github.com/meirlamdan/torah-munachat"><img src="https://github.com/favicon.ico"
            alt="github" width="24" height="24"></a></p>
    </div>
  </footer>
</template>

<style scoped></style>
