import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import SingUp from "./components/SingUp.vue";
import LogIn from "./components/LogIn.vue";

const routes = [
  {
    name: "Helloworld",
    path: "/HelloWorld",
    component: HelloWorld,
  },
  {
    name: "SingUp",
    path: "/SingUP",
    component: SingUp,
  },
  {
    name: "LogIn",
    path: "/",
    component: LogIn,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
