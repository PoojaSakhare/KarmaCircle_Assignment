<template>
  <div class="card">
    <div class="card-user">
      <img
        src="https://th.bing.com/th/id/OIP.0oAaZ9FyGxTXXYSBSlXziQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt=""
      />
      <h3 class="user-name">cgfhffbhgf</h3>
    </div>
    <div class="card-tweet">
      <p>sfgfhfygbn</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  // props: {
  //   tweet: {
  //     type: String,
  //   },
  //   userName: {
  //     type: String,
  //   },
  // },
  created() {
    this.logmessage();
  },
  methods: {
    logmessage() {
      console.log("from Card", this.tweet, this.userName);
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
.card-user img {
  width: 50px;
  height: 50px;
  position: center;
  border-radius: 100px;
  margin: 10px 10px 0px 10px;
}
.card-tweet p {
  color: black;
  font-size: 10px;
}
.card {
  background-color: white;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}
.card-user {
  display: flex;
  text-align: center;
}
.card-user h3 {
  padding-top: 15px;
}
</style>