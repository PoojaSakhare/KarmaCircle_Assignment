import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import vueRouter from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(Vuelidate);
Vue.use(vueRouter);
Vue.config.productionTip = false;

const routes = [
  { name: "Login", path: "/Login", component: Login },
  { name: "Home", path: "/", component: Home }
];

const router = new vueRouter({
  routes
});

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
