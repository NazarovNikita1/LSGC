import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import ParticipatePage from "./views/ParticipatePage.vue";
import PromptsPage from "./views/PromptsPage.vue";
import BaselinePage from "./views/BaselinePage.vue";
import CFPPage from "./views/CFPPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/participate",
    name: "Participate",
    component: ParticipatePage,
  },
  {
    path: "/prompts",
    name: "Prompts",
    component: PromptsPage,
  },
  {
    path: "/baseline",
    name: "Baseline",
    component: BaselinePage,
  },
  {
    path: "/cfp",
    name: "CFP",
    component: CFPPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
