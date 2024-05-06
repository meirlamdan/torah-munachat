<script setup>
import { Icon } from '@iconify/vue';
defineProps(['icon', 'title', 'about'])
</script>

<template>
  <div class='about-category'>
    <div><Icon :icon style="font-size: 40px" /></div>
    <h3>{{ title }}</h3>
    <p>{{ about }}</p>
  </div>

</template>

<style scoped>
.about-category {
  display: inline-block;
  padding: 5px;
  min-width: 70%;
  margin: 0 auto 5px;
  border: solid 1px rgb(211, 201, 201);
  border-radius: 5px;


}

.about-category span {
  font-size: 48px;
  padding: 10px;
  margin-top: 5px;
  border: solid 1px black;
  background: rgb(236, 231, 231);
  border-radius: 36px;
}
</style>