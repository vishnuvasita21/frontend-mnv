<template>
  <div>
    <base-header style="background-color: rgb(54, 134, 255) !important">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </div>
      </div>
    </base-header>

    <!-- dashboard -->
    <div class="container">
      <div class="card-view">
        <!-- flex-calendar -->
        <div style="flex: 2">
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-calendar mr-2"></i>Upcoming Events
              </h3>
            </div>
            <div class="w-100">
              <vue-cal
                class="vuecal--blue-theme"
                hide-view-selector
                :time="false"
                active-view="week"
                style="width: 100%; height: 300px"
              />
            </div>
          </div>
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue"><i class="fa fa-calendar mr-2"></i>News</h3>
            </div>
            <div v-for="news in eventList" :key="news.id" class="border p-4">
              <h3>
                <i class="fa fa-flag text-red mr-2"></i>{{ news.title }} ({{
                  $dayjs(news.eventDate).format("DD-MMM-YYYY")
                }})
              </h3>
              <p class="text-muted">
                <i class="fa fa-clock mr-2"></i
                >{{ $dayjs(news.date).format("DD-MMM-YYYY") }} | Sachin Gupta
              </p>
            </div>
          </div>
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-user-plus mr-2"></i>New member
              </h3>
            </div>
            <div class="border">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column class="flex-fill" />
              </el-table>
            </div>
          </div>
        </div>

        <!-- flex-activities -->
        <div style="flex: 1">
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-clock mr-2"></i>Clock-in/out
              </h3>
            </div>
            <div class="border">
              <div>
                <el-button type="success" style="width: 100%"
                  ><i class="fa fa-clock text-white mr-2"></i>Clock
                  in/out</el-button
                >
              </div>
            </div>
          </div>
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-stopwatch mr-2"></i>To-dos
              </h3>
            </div>
            <div class="border">
              <el-table :data="tableData" height="200" style="width: 100%">
                <el-table-column class="flex-fill" />
              </el-table>
            </div>
          </div>
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-plane mr-2"></i>My Time-off
              </h3>
            </div>
            <div class="border">
              <el-table :data="tableData" height="250" style="width: 100%">
                <el-table-column class="flex-fill" />
              </el-table>
            </div>
          </div>
          <div class="card m-2 p-4">
            <div>
              <h3 class="text-blue">
                <i class="fa fa-plane-up mr-2"></i>Who's off today
              </h3>
            </div>
            <div class="border">
              <el-table :data="tableData" height="250" style="width: 100%">
                <el-table-column class="flex-fill" />
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouteBreadCrumb from "@/components/Breadcrumb/RouteBreadcrumb";
import { ElTable, ElTableColumn, ElButton } from "element-plus";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";

export default {
  components: {
    RouteBreadCrumb,
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    VueCal,
    ElButton,
  },
  data() {
    return {
      eventList: [],
    };
  },
  methods: {
    getEventDetails() {
      this.eventList = [];
      axios.get("http://localhost:7000/getevent").then((response) => {
        this.eventList = response.data;
      });
    },
  },
  mounted() {
    this.getEventDetails();
  },
};
</script>

<style scoped>
.card-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
  align-items: flex-start;
}
</style>
