<template>
  <div id="app">
    <header v-if="this.$route.name !== 'Login'">
      <nav>
        <span @click="logMessage"
          ><router-link to="/Home">HOME</router-link></span
        >
        <div>
          <span> <router-link to="/Profile">Profile</router-link> </span>
          <span> <router-link to="/">LOGOUT</router-link> </span>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
  width: 100%;
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
  margin-bottom: 0;
  padding-bottom: 0px;
  z-index: 2;
  width: 100%;
  position: fixed;
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
