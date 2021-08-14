<template>
  <div class="site-card">
    <h3>{{ name }}</h3>
    <div class="img">
    <img :src="src || `${href}/favicon.ico`" :alt="name" />
    </div>
    <div  class="about">
    {{ about }}
    </div>
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
.site-card:hover{
  box-shadow: 0 3px 11px 2px rgb(0 0 0 / 30%);
}
.site-card .img{
  height:30%;
}
.site-card img {
  height: 70%;
  width: auto;
  max-width:90%
}
.site-card .about{
  padding: 5px;
  height: 28%;
  overflow:auto;
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
.site-card a:hover{
   background: rgb(179, 164, 164);
 
} 
</style>
