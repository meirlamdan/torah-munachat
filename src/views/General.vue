<template>
  <about-category icon="apps" title="פרויקטים תורניים" about="כאן מרוכזים מגוון פרויקטים תורניים "/>
  <div class="container" >
  <site-card v-for="(item,i) in General" :key="i" v-bind="item" />
  </div>
</template>

<script>
import AboutCategory from '../components/AboutCategory.vue'
import siteCard from '../components/siteCard.vue'
import { General } from '../General.js'
export default {
  components: { siteCard, AboutCategory },
  setup(){
      return { General }
  }

}
</script>

<style>
.container{
     display : flex;
     flex-wrap : wrap;
     justify-content: center;
}

</style>