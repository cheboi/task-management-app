import { createRouter, createWebHistory } from "vue-router";
import Overview from "@/views/Overview.vue";
import Tasks from "@/views/Tasks.vue";
import Mentors from "@/views/Mentors.vue";
import Messages from "@/views/Messages.vue";
import Settings from "@/views/Settings.vue";

const routes = [
  { path: "/", component: Overview },
  { path: "/tasks", component: Tasks },
  { path: "/mentors", component: Mentors },
  { path: "/messages", component: Messages },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
