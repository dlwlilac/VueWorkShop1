import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "toolbar",
    component: () => import("../components/Navbar.vue"),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/profile.vue"),
      },
      {
        path: "/simple",
        name: "simple",
        component: () => import("../views/Simple.vue"),
      },
      {
        path: "/grade",
        name: "grade",
        component: () => import("../views/Grade.vue"),
      },
      {
        path: "/apicon",
        name: "apicon",
        component: () => import("../views/apicon.vue"),
      },
      // {
      //   path: "/login",
      //   name: "login",
      //   component: () => import("../views/login.vue"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
