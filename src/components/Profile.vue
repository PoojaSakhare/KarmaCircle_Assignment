<template>
  <div class="Home-container">
    <SideBar />
    <div class="profile-content">
      <!-- <h4 @click="getProfile">get profile</h4> -->
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.AdoJAsiWdwMNG0ZTvUoTUQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          srcset=""
        />
      </div>

      <h1 class="user_name">
        {{ this.profile[0].first_name }} {{ this.profile[0].last_name }}
      </h1>
      <br />
      <h3>{{ this.profile[0].email }}</h3>
      <br />
      <h3>{{ this.profile[0].gender }}</h3>
      <h3>{{ this.profile[0].country }}</h3>
    </div>
    <div class="right-menu"><RightMenu /></div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import RightMenu from "./RightMenu";
// import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      profile: [
        {
          id: 1,
          first_name: "Jolie",
          last_name: "Ferne",
          email: "jferne0@wesbite.com",
          gender: "Female",
          country: "Sweden",
        },
      ],
    };
  },
  components: {
    SideBar,
    RightMenu,
  },
  created() {
    // this.getProfile();
  },
  methods: {
    getProfile() {
      // axios
      //   .get("https://tweets.free.beeceptor.com/profile")
      //   .then((response) => {
      //     this.profile = response.data;
      //     console.log("profile from profile", this.profile[0]);
      //   })
      //   .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  margin-top: 0;
}
span {
  margin-left: 10px;
}
.Home-container {
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  height: 100%;
}
.right-menu {
  width: 40%;
  background-color: #CAE4DB;
  margin-top: 61.5px;
  padding: 10px;
}
.profile-content {
  margin-top: 61.5px;
  background-color: #F5F4F4;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column;
}
.profile-content img {
  position: realtive;

  border-radius: 100px;
  border: 1px solid #021a40;
}
.user_name {
  display: block;
}
@media (min-device-width: 320px) and (max-device-width: 480px) {
  .right-menu {
    display: none;
  }
}
</style>