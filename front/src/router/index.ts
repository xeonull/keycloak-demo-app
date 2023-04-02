import { createRouter, createWebHistory, Router } from "vue-router";

export default <Router>createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/App.vue"),
      alias: "/",
    },
    {
      path: "/profile",
      component: () => import("@/pages/PageProfile.vue"),
    },
  ],
});
