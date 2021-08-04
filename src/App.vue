<template>
  <header>
    <div>
      <h1>תורה מונחת</h1>
      <h3>תורה מונחת בקרן זוית כל הרוצה יבוא ויטול</h3>
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
    <div class="hh">מ.ל</div>
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
header div {
  /* display:inline-block; */
  /* font-size: 30px; */
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
</style>
    font-size: 14px;
    font-family: Google Sans,arial,sans-serif;
    white-space: nowrap;
    line-height: 16px;
    -webkit-tap-highlight-color: rgba(0,0,0,.10);
    text-decoration: none;
    display: inline-block;
    padding: 17px 12px 11px 10px;
    color: #5f6368;
    outline: 0;