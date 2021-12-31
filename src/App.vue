<template>
  <div id="app">
    <header v-if="this.$route.name == 'Home'">
      <nav>
        <span @click="logMessage"><router-link to="/">HOME</router-link></span>
        <div>
          <span> <router-link to="/">Profile</router-link> </span>
          <span> <router-link to="/Login">LOGOUT</router-link> </span>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login,
  },
  methods: {
    logMessage() {
      console.log(this.$route.name);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: #00303F;
  color: white;
  padding: 20px;
  margin-top: 0;
}
header {
  margin-top: 0;
  padding-bottom: 20px;
}
span {
  margin-left: 10px;
}
nav a {
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
