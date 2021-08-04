<template>
  <div class="site-card">
    <h3>{{ name }}</h3>
    <img :src="src || `${href}/favicon.ico/`" :alt="name" />
    <p>{{ about }}</p>
    <a :href="href" target="_blank">עבור לאתר</a>
  </div>



</template>

<script>
export default {
  props: {
    name: { type: String },
    src: { type: String },
    about: { type: String },
    href: { type: String },
  },
};
</script>

<style >
.site-card {
  height: 250px;
  width: 300px;
  margin: 5px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 3px 11px 2px rgb(0 0 0 / 16%);
}
.site-card img {
  max-width: 90%;
  max-height: 20%;
  min-width: 30px;
  min-height: 30px;
}
 .site-card a {
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    margin: 0px auto;
    padding: 5px;
    width: 40%;
    background: rgb(241, 238, 238);
    font-size: 20px;
    text-decoration-line: none;
    border-radius: 5px;
    
}
.books-site a:hover{
   background: rgb(216, 211, 211);
 
} 
</style>
