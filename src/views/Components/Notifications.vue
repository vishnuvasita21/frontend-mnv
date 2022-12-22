<template>
  <div style="margin-top: 10px">
    <div class="container">
      <div class="leave-body-header">
        <div>
          <span style="font-size: 20px; color: Dodgerblue">
            <i class="fa fa-bell"></i>
          </span>
        </div>
        <div><h3 style="margin: 0">All Users</h3></div>
      </div>
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="date" label="Date" class="flex-fill" />
        <el-table-column prop="name" label="Name" class="flex-fill" />
        <el-table-column prop="address" label="Address" class="flex-fill" />
      </el-table>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useToast } from "vue-toastification";

import Notification from "@/components/Notification";
import { ElTable, ElTableColumn } from "element-plus";

export default {
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
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
