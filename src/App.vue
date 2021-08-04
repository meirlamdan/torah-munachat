<template>
  <header>
    <div>
      <h1>תורה מונחת</h1>
      <h3>  תורה מונחת בקרן זוית כל הרוצה יבוא ויטול <small>(קידושין סו)</small> </h3>
    </div>
  </header>
  <div id="nav">
      <router-link to="/"
      ><span class="material-icons">menu_book</span> מאגרי ספרים
    </router-link>
    <router-link to="/lessons"
      ><span class="material-icons"> mic_external_on </span> שיעורים
      ודרשות</router-link
    >
    <router-link to="/general"
      ><span class="material-icons"> apps </span> שונות</router-link
    >
    <router-link to="/About"
      ><span class="material-icons"> info </span> אודות</router-link
    >
  </div>
  <router-view />
  <footer>
    <div >
      <p>מ.ל <a href="https://github.com/meirlamdan/torah-munachat"><img src="https://github.com/favicon.ico" alt="github" width="24" height="24"></a></p> 
    </div>
  </footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
#app {
  font-family: Arimo,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header div,footer {
  background: rgb(246, 249, 250);
  border: black solid 1px;
  border-radius: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 20px;
}
#nav a:hover{
  font-size: 1.2em;
}
#nav a span {
  display: inline-block;
  vertical-align: middle;
}

#nav a.router-link-exact-active {
  color: green;
  font-size: 1.2em;
}
.hh {
  clear: both;
}

footer a{
   vertical-align: middle;
    margin: 0 10px;
 }
</style>
