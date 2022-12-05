<template>
  <div class="wrapper">
    <!-- <notifications></notifications> -->
    <side-bar>
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-shop text-primary',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Employees',
            icon: 'ni ni-single-02 text-orange',
            path: '/employees',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Checklist',
            icon: 'ni ni-check-bold text-blue',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Time off',
            icon: 'ni ni-user-run text-green',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Calendar',
            icon: 'ni ni-calendar-grid-58 text-pink',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Notifications',
            icon: 'ni ni-bell-55 text-red',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Profile',
            icon: 'ni ni-circle-08 text-purple',
            path: '/pages/user',
          }"
        >
        </sidebar-item>
      </template>

      <template v-slot:links-after>
        <hr class="my-3" />
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation"
              target="_blank"
            >
              <i class="ni ni-spaceship"></i>
              <span class="nav-link-text">Getting started</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation/foundation/colors.html"
              target="_blank"
            >
              <i class="ni ni-palette"></i>
              <span class="nav-link-text">Foundation</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation/components/avatars.html"
              target="_blank"
            >
              <i class="ni ni-ui-04"></i>
              <span class="nav-link-text">Components</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation/components/plugin_datepicker.html"
              target="_blank"
            >
              <i class="ni ni-chart-pie-35"></i>
              <span class="nav-link-text">Plugins</span>
            </a>
          </li>
        </ul>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <router-view></router-view>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
