<template>
  <div class="Home-container">
    <SideBar />
    <div class="content"><Content :posts="this.posts" /></div>
    <div class="right-menu"><RightMenu /></div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import Content from "./Content";
import RightMenu from "./RightMenu";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    SideBar,
    Content,
    RightMenu,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://tweets.free.beeceptor.com/tweets/all")
        .then((response) => {
          this.posts.push(response.data);
          console.log("posts from home", this.posts);
        })
        .catch((error) => console.log(error));
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
.content {
  margin-top: 61.5px;
  background-color: #F5F4F4;
  width: 100vw;
  padding: 10px;
}
@media (min-device-width: 320px) and (max-device-width: 480px) {
  .right-menu {
    display: none;
  }
  .content {
    padding-right: 20px;
  }
}
</style>