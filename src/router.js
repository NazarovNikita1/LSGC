import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import ParticipatePage from "./views/ParticipatePage.vue";
import TrainingPage from "./views/TrainingPage.vue";

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
    path: "/trainingdata",
    name: "TrainingData",
    component: TrainingPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
