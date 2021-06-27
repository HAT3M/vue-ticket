import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
