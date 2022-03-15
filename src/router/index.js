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
      showFooter: false,
      component: () => import("../pages/register"),
    },
    {
      path: "/cart",
      name: "Cart",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/cart"),
    },
    {
      path: "/mine",
      name: "Mine",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/mine"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/login"),
    },
    {
      path: "/fenlei",
      name: "Fenlei",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/fenlei"),
    },
    {
      path: "/order",
      name: "Order",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/order"),
    },
    {
      path: "/detail",
      name: "Detail",

      meta: {
        showFooter: false,
      },
      component: () => import("../pages/detail"),
    },
    {
      path: "/home",
      name: "Home",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/home"),
    },
    // 帮助
    {
      path: "/help",
      name: "Help",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/help"),
    },
    // 110
    {
      path: "/police",
      name: "Police",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/police"),
    },
  ],
});
export default router;
