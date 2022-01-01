<template>
  <div class="container">
    <div class="wrapperr">
      <div class="input-box">
        <div class="tweet-area">
          <span class="placeholder">What's happening?</span>
          <div
            class="input editable"
            contenteditable="true"
            spellcheck="false"
          ></div>
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
        <a href="#" class="myButton">Tweet</a>
      </div>
    </div>
    <div class="tweets-list">
      <ul>
        <li v-for="product in posts" :key="product._id">
          {{ product.name }}
        </li>
      </ul>
      <button @click="logMessage"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  methods: {
    logMessage() {
      console.log("posts is ", this.posts);
    },
  },
  props: {
    posts: {
      type: Object,
    },
  },
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

.tweet-area .placeholder {
  margin-top: -3px;
  font-size: 22px;
  color: #98A5B1;
  opacity: 0.5;
  pointer-events: none;
}
.tweet-area .input {
  outline: none;
  font-size: 17px;
  min-height: inherit;
  word-wrap: break-word;
  word-break: break-all;
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
</style>