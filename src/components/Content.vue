<template>
  <div class="container">
    <div class="wrapperr">
      <div class="input-box">
        <div class="tweet-area">
          <textarea
            maxlength="500"
            type="text"
            v-model="tweetText"
            placeholder="What's happening?"
            class="input editable input"
            spellcheck="false"
          />
          <div
            class="input readonly"
            contenteditable="true"
            spellcheck="false"
          ></div>
        </div>
        <div class="privacy">
          <i class="fas fa-globe-asia"></i>
          <span>Everyone can reply</span>
        </div>
      </div>
      <div class="bottom">
        <ul class="icons">
          <li><i class="uil uil-capture"></i></li>
          <li><i class="far fa-file-image"></i></li>
          <li><i class="fas fa-map-marker-alt"></i></li>
          <li><i class="far fa-grin"></i></li>
          <li><i class="far fa-user"></i></li>
        </ul>
        <a href="#" class="myButton" @click="createTweet($event)">Tweet</a>
      </div>
    </div>
    <div class="tweets-list">
      <ul>
        <li v-for="product in posts" :key="product._id">
          <div class="card">
            <div class="card-user">
              <img
                src="https://th.bing.com/th/id/OIP.0oAaZ9FyGxTXXYSBSlXziQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt=""
              />
              <h3 class="user-name">{{ product.userName }}</h3>
            </div>
            <div class="card-tweet">
              <p>{{ product.tweet }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import axios from "axios";
export default {
  name: "content",
  data() {
    return {
      tweetText: "",
      posts: [
        {
          id: 1,
          userName: "Bibby Siderfin",
          tweet:
            "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          date: "10/16/2021",
        },
        {
          id: 2,
          userName: "Bryna Braidwood",
          tweet:
            "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          date: "6/18/2021",
        },
        {
          id: 3,
          userName: "Pace Carmel",
          tweet:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
          date: "7/24/2021",
        },
        {
          id: 4,
          userName: "Shurlocke Sumption",
          tweet:
            "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
          date: "3/12/2021",
        },
        {
          id: 5,
          userName: "Meade Grayshon",
          tweet:
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          date: "3/3/2021",
        },
        {
          id: 6,
          userName: "Brendan Corsor",
          tweet:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
          date: "3/24/2021",
        },
        {
          id: 7,
          userName: "Drusie Connechie",
          tweet:
            "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          date: "10/29/2021",
        },
        {
          id: 8,
          userName: "Ella Keets",
          tweet:
            "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          date: "5/31/2021",
        },
        {
          id: 9,
          userName: "Arron Blackstock",
          tweet:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          date: "12/27/2020",
        },
        {
          id: 10,
          userName: "Jacobo Tirte",
          tweet:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
          date: "2/20/2021",
        },
      ],
    };
  },
  components: {
    Card,
  },
  created() {
    // this.getData();
  },
  methods: {
    logMessage() {
      console.log("posts is ", this.posts);
    },
    getData() {
      axios
        .get("https://tweets.free.beeceptor.com/tweets/all")
        .then((response) => {
          this.posts = response.data;
          console.log("posts from Content", this.posts[0].userName);
        })
        .catch((error) => console.log(error));
    },
    getList() {
      for (let i = 0; i < this.posts.length; i++) {
        console("element is: ", this.post[i]);
      }
    },
    createTweet(e) {
      //Hey ya! Great to see you here. Btw, nothing is configured for this request path.
      // Create a rule and start building a mock API.
      // axios
      //   .post("https://tweets.free.beeceptor.com/tweets/all", {
      //     userName: "Fred Sakhare",
      //     tweet: "It's a great day dude!",
      //     date: new Date(),
      //   })
      //   .then(function (response) {
      //     console.log("put request", response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      if (this.tweetText) {
        let id = Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);

        var newTweet = {
          userName: "Jolie Ferne",
          tweet: this.tweetText,
          date: new Date().toISOString().split("T")[0],
          id: id,
        };
        this.posts.push(newTweet);
        console.log(this.posts);
        this.tweetText = "";
      }
      e.preventDefault();
    },
  },
  // props: {
  //   posts: {
  //     type: Object,
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* ::selection {
  color: #fff;
  background: #1da1f2;
} */
.wrapperr {
  background: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 15px 15px 15px 25px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.input-box {
  padding-top: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.input-box .tweet-area {
  position: relative;
  min-height: 10px;
  max-height: 170px;
  overflow-y: auto;
}

.tweet-area::-webkit-scrollbar {
  width: 0px;
}

.tweet-area ::placeholder {
  margin-top: -3px;
  font-size: 22px;
  color: #98A5B1;
  opacity: 0.5;
  pointer-events: none;
}
textarea {
  outline: none;
  border: none;
  font-size: 17px;
  height: 80px;
  width: 600px;
  overflow: auto;
  min-height: 60px;
  word-wrap: break-word;
}
.tweet-area .editable {
  position: relative;
  z-index: 5;
  padding-top: 20px;
}
.tweet-area .readonly {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: transparent;
  background: transparent;
}
.readonly .highlight {
  background: #fd9bb0;
}
.input-box .privacy {
  color: #1da1f2;
  margin: 15px 0;
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.privacy:hover,
.icons li:hover {
  background: #e7f5fe;
}
.privacy i {
  font-size: 18px;
}
.privacy span {
  font-size: 15px;
  font-weight: 600;
  margin-left: 7px;
}
.bottom {
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
}
.bottom .icons {
  display: inline-flex;
}
.icons li {
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  margin: 0 2px;
  height: 38px;
  width: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s ease;
}
.bottom .content_ {
  display: flex;
  align-items: center;
  justify-content: center;
}
.myButton {
  background-color: #1da1f2;
  border-radius: 15px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  padding: 5px 10px 10px 10px;
  text-decoration: none;
  max-height: 40px;
  max-width: 100px;
}
.myButton:hover {
  background-color: #117abb;
}
.myButton:active {
  position: relative;
  top: 1px;
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