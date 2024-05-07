<script setup>
defineProps(['name', 'src', 'about', 'href'])
const getImageUrl = (path, href) => {
  if (!path) {
    return `${href}/favicon.ico`
  }
  if (path.startsWith("http")) {
    return path
  }
  return new URL(`../assets/${path}`, import.meta.url).href;
};

</script>

<template>
  <div class="w-72 h-80 p-3 text-center flex flex-col items-center rounded-lg shadow hover:shadow-lg bg-slate-100">
    <div class="text-xl min-h-14 mb-2 font-medium">{{ name }}</div>
    <div class="h-14">
      <img :src="getImageUrl(src, href)" :alt="name" class="mx-auto h-full max-w-60" />
    </div>
    <div class="h-36 my-4">
      {{ about }}
    </div>
    <a class=" text-white font-medium bg-slate-500 hover:bg-slate-600 py-1 px-2 rounded-lg" :href="href" target="_blank">עבור לאתר</a>
  </div>



</template>


<style>
.site-card {
  /* height: 250px;
  width: 300px;
  border-radius: 5px; */
  /* position: relative; */
  /* box-shadow: 0 3px 11px 2px rgb(0 0 0 / 16%); */
}

/* .site-card:hover {
  box-shadow: 0 3px 11px 2px rgb(0 0 0 / 30%);
}

.site-card .img {
  height: 30%;
}

.site-card img {
  height: 70%;
  width: auto;
  max-width: 90%
}

.site-card .about {
  padding: 5px;
  height: 28%;
  overflow: auto;
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

.site-card a:hover {
  background: rgb(179, 164, 164);

} */
</style>
