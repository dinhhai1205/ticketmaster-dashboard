import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Auth from "./pages/Auth.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
  ],
});
