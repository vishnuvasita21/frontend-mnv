import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/views/Layout/DashboardLayout";
import AuthLayout from "@/views/Pages/AuthLayout";

// Dashboard pages
import Dashboard from "../views/Dashboard/Dashboard.vue";
//import Alternative from "../views/Dashboard/AlternativeDashboard.vue";
//import Widgets from "../views/Widgets.vue";
//import Charts from "../views/Charts.vue";
import Employees from "../views/Employees.vue";
import Calendar from "../views/Calendar/Calendar.vue";

// Pages
//import Pricing from "../views/Pages/Pricing.vue";
import Login from "../views/Pages/Login.vue";
import Forgot from "../views/Pages/Forgotpassword.vue";
import Reset from "../views/Pages/Resetpassword.vue";
//import Admin from "../views/Pages/Admin.vue";
import Register from "../views/Pages/Register.vue";
//import Lock from "../views/Pages/Lock.vue";
import Profile from "../views/Pages/UserProfile.vue";
//import Timeline from "../views/Pages/TimeLinePage.vue";

// Components pages
import Buttons from "../views/Components/Buttons.vue";
import Cards from "../views/Components/Cards.vue";
import Grid from "../views/Components/GridSystem.vue";
import Notifications from "../views/Components/Notifications.vue";
import Checklists from "../views/Components/Checklists.vue";
import Timeoff from "../views/Components/Timeoff.vue";
import Icons from "../views/Components/Icons.vue";
//import Typography from "../views/Components/Typography.vue";
import Myadmin from "../views/Components/Myadmin.vue";

// Tables pages
//import RegularTables from "../views/Tables/RegularTables.vue";
//import SortableTables from "../views/Tables/SortableTables.vue";
//import PaginatedTables from "../views/Tables/PaginatedTables.vue";

// Forms pages
//import FormElements from "../views/Forms/FormElements.vue";
//import FormComponents from "../views/Forms/FormComponents.vue";
import FormValidation from "../views/Forms/FormValidation.vue";

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons },
    },
    {
      path: "cards",
      name: "Cards",
      components: { default: Cards },
    },
    {
      path: "grid-system",
      name: "Grid",
      components: { default: Grid },
    },
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
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons },
    },
    // {
    //   path: "typography",
    //   name: "Typography",
    //   components: { default: Typography },
    // },
  ],
};

// let tablesMenu = {
//   path: "/tables",
//   component: DashboardLayout,
//   redirect: "/tables/regular",
//   name: "Tables menu",
//   children: [
//     {
//       path: "regular",
//       name: "Tables",
//       components: { default: RegularTables },
//     },
//     {
//       path: "sortable",
//       name: "Sortable",
//       components: { default: SortableTables },
//     },
//     {
//       path: "paginated",
//       name: "Paginated",
//       components: { default: PaginatedTables },
//     },
//   ],
// };

let formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/elements",
  name: "Forms",
  children: [
    // {
    //   path: "elements",
    //   name: "Forms elements",
    //   components: { default: FormElements },
    // },
    // {
    //   path: "components",
    //   name: "Forms Components",
    //   components: { default: FormComponents },
    // },
    {
      path: "validation",
      name: "Forms Validation",
      components: { default: FormValidation },
    },
  ],
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    name: "dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      // {
      //   path: "/alternative",
      //   name: "Alternative",
      //   components: { default: Alternative },
      //   meta: {
      //     navbarType: "light",
      //   },
      // },
      // {
      //   path: "/widgets",
      //   name: "Widgets",
      //   components: { default: Widgets },
      // },
      // {
      //   path: "/charts",
      //   name: "Charts",
      //   components: { default: Charts },
      // },
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
      // {
      //   path: "/pages/timeline",
      //   name: "Timeline",
      //   components: { default: Timeline },
      // },
    ],
  },
  {
    path: "/",
    redirect: "/",
    component: AuthLayout,
    children: [
      // {
      //   path: "/pricing",
      //   name: "Pricing",
      //   components: { default: Pricing },
      // },
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
      // {
      //   path: "/admin",
      //   name: "Admin",
      //   components: { default: Admin },
      // },
      {
        path: "/register",
        name: "Register",
        components: { default: Register },
      },
      // {
      //   path: "/lock",
      //   name: "Lock",
      //   components: { default: Lock },
      // },
    ],
  },
  componentsMenu,
  // tablesMenu,

  formsMenu,
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
