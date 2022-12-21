<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">{{ $route.name }}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </div>
      </div>
    </base-header>

    <div class="mt--6">
      <div class="row justify-content-center">
        <div class="col-lg-10 card-wrapper">
          <card>
            <template v-slot:header>
              <h3 class="mb-0">Alerts</h3>
            </template>
            <base-alert dismissible type="default" icon="ni ni-like-2">
              <strong>Default!</strong> This is a default alert—check it out!
            </base-alert>

            <base-alert dismissible type="primary" icon="ni ni-like-2">
              <strong>Default!</strong> This is a primary alert—check it out!
            </base-alert>

            <base-alert dismissible type="secondary" icon="ni ni-like-2">
              <strong>Default!</strong> This is a secondary alert—check it out!
            </base-alert>

            <base-alert dismissible type="info" icon="ni ni-like-2">
              <strong>Default!</strong> This is a info alert—check it out!
            </base-alert>

            <base-alert dismissible type="danger" icon="ni ni-like-2">
              <strong>Default!</strong> This is a danger alert—check it out!
            </base-alert>

            <base-alert dismissible type="warning" icon="ni ni-like-2">
              <strong>Default!</strong> This is a warning alert—check it out!
            </base-alert>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useToast } from "vue-toastification";
import BaseAlert from "@/components/BaseAlert";
import RouteBreadcrumb from "@/components/Breadcrumb/RouteBreadcrumb";
import BaseHeader from "@/components/BaseHeader";
import Notification from "@/components/Notification";

export default {
  components: {
    BaseAlert,
    BaseHeader,
    RouteBreadcrumb,
  },
  data() {
    return {
      modals: {
        classic: false,
        notice: false,
        form: false,
      },
      formModal: {
        email: "",
        password: "",
        remember: true,
      },
    };
  },
  methods: {
    runToast(pos, type, ownText, ownIcon) {
      const text =
        "Welcome to <b>Vue Argon Dashboard Pro</b> - a beautiful resource for every web developer";
      const icon = "ni ni-bell-55";
      const content = {
        component: Notification,
        props: {
          ownText: ownText,
          ownIcon: ownIcon,
          icon: icon,
          text: text,
          type: type,
        },
      };
      const toast = useToast();
      toast(content, {
        hideProgressBar: true,
        icon: false,
        closeButton: false,
        position: pos,
      });
    },
    showSwal(type) {
      if (type === "basic") {
        swal.fire({
          title: `Here's a message!`,
          text: `A few words about this sweet alert ...`,
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } else if (type === "info") {
        swal.fire({
          icon: "info",
          title: `Info`,
          text: `A few words about this sweet alert ...`,
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-info",
          },
        });
      } else if (type === "success") {
        swal.fire({
          title: `Success`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-success",
          },
          icon: "success",
        });
      } else if (type === "warning") {
        swal.fire({
          title: `Warning`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-warning",
          },
          icon: "warning",
        });
      } else if (type === "question") {
        swal.fire({
          title: `Are you sure?`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-default",
          },
          icon: "question",
        });
      }
    },
  },
};
</script>
<style>
.ct-notification .Vue-Toastification__toast--default {
  padding: 0;
  overflow: inherit;
  box-shadow: none;
  background-color: transparent;
}
</style>
