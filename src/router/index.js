import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/reg",
      name: "Register",
      component: () => import("../pages/register"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../pages/cart"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/login"),
    },
    {
      path: "/order",
      name: "Order",
      component: () => import("../pages/order"),
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("../pages/detail"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../pages/home"),
    },
  ],
});
export default router;
