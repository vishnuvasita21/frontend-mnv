import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/views/Layout/DashboardLayout";
import AuthLayout from "@/views/Pages/AuthLayout";
import NotFound from "@/views/Layout/NotFound.vue";

// Dashboard pages
import Dashboard from "../views/Dashboard/Dashboard.vue";

import Employees from "../views/Employees.vue";
import Calendar from "../views/Calendar/vueCalendar.vue";

// Pages

import Login from "../views/Pages/Login.vue";
import Forgot from "../views/Pages/Forgotpassword.vue";
import Reset from "../views/Pages/Resetpassword.vue";

import Register from "../views/Pages/Register.vue";

import Profile from "../views/Pages/UserProfile.vue";

// Components pages

import Notifications from "../views/Components/Notifications.vue";
import Checklists from "../views/Components/Checklists.vue";
import Timeoff from "../views/Components/Timeoff.vue";

import Myadmin from "../views/Components/Myadmin.vue";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (JSON.parse(localStorage.getItem("user")).token) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components",
  beforeEnter: guardMyroute,
  name: "Components",
  children: [
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications },
    },
    {
      path: "checklists",
      name: "Checklists",
      components: { default: Checklists },
    },
    {
      path: "timeoff",
      name: "Timeoff",
      components: { default: Timeoff },
    },
    {
      path: "myadmin",
      name: "Myadmin",
      components: { default: Myadmin },
    },
  ],
};

let notfound = {
  path: "/404",
  component: NotFound,
  name: "NotFound",
};

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: DashboardLayout,
    beforeEnter: guardMyroute,
    name: "dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },

      {
        path: "/employees",
        name: "Employees",
        components: { default: Employees },
      },
      {
        path: "/calendar",
        name: "Calendar",
        components: { default: Calendar },
      },
      {
        path: "/pages/user",
        name: "Profile",
        components: { default: Profile },
      },
    ],
  },
  {
    path: "/",
    redirect: "/",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        components: { default: Login },
      },
      {
        path: "/forgotpassword",
        name: "Forgot",
        components: { default: Forgot },
      },
      {
        path: "/resetpassword",
        name: "Reset",
        components: { default: Reset },
      },

      {
        path: "/register",
        name: "Register",
        components: { default: Register },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  componentsMenu,
  notfound,
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
