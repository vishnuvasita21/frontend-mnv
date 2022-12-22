<template>
  <div>
    <base-header
      class="pb-6 content__title content__title--calendar"
      style="background-color: rgb(54, 134, 255) !important"
    >
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">{{ $route.name }}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </div>
      </div>
    </base-header>
    <!-- div for search menu -->

    <div class="container mt--6">
      <div class="card" style="padding: 20px">
        <div class="container">
          <!-- leave header -->
          <div class="leave-header">
            <div class="leave">
              <div class="flex-fill">
                <h3 style="margin: 0">Sick leaves</h3>
              </div>
              <div class="flex-fill"><p style="margin: 0">10 Days</p></div>
            </div>
            <div class="leave">
              <div class="flex-fill">
                <h3 style="margin: 0">Unpaid leaves</h3>
              </div>
              <div class="flex-fill"><p style="margin: 0">10 Days</p></div>
            </div>
          </div>

          <!-- leave body -->
          <!-- header -->
          <div class="leave-body">
            <div class="leave-body-header">
              <div>
                <span style="font-size: 20px; color: Dodgerblue">
                  <i class="fa fa-list"></i>
                </span>
              </div>
              <div><h3 style="margin: 0">My Requests</h3></div>
            </div>

            <!-- second part -->
            <div class="select-filter">
              <div>
                <el-select v-model="leavetype" placeholder="Select type">
                  <el-option
                    v-for="option in leaveType"
                    :key="option.label"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </div>
              <div>
                <el-select v-model="leavestatus" placeholder="Select status">
                  <el-option
                    v-for="option in leaveStatus"
                    :key="option.label"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </div>
              <div>
                <el-date-picker
                  v-model="selectdate"
                  type="date"
                  placeholder="Pick a day"
                />
              </div>

              <div>
                <el-button type="primary" @click="showModal = true" solid
                  >+ New Request</el-button
                >
                <transition name="fade" appear>
                  <div class="modal-overlay" v-if="showModal"></div>
                </transition>

                <transition name="slide" appear>
                  <div class="timeOffModal" v-if="showModal">
                    <h2>New Request</h2>
                    <hr style="margin: 20px 0" />
                    <div class="timeoffinput">
                      <div>
                        <i class="fa fa-plane-up"></i>
                      </div>
                      <div class="flex-fill">
                        <el-select
                          class="w-100"
                          v-model="selects.simple"
                          placeholder="Select Type"
                        >
                          <el-option
                            v-for="option in selects.leaves"
                            :key="option.label"
                            :label="option.label"
                            :value="option.value"
                          />
                        </el-select>
                      </div>
                    </div>
                    <div class="timeoffinput-radio">
                      <div><i class="fa-regular fa-clock"></i></div>
                      <div style="padding-top: 3px">
                        <el-radio-group v-model="days" size="small">
                          <el-radio label="single day">Single Day</el-radio>
                          <el-radio label="multiple days"
                            >Multiple Day</el-radio
                          >
                        </el-radio-group>
                        <div>
                          <div class="singledayinput">
                            <div>
                              <el-date-picker
                                v-if="days == 'single day'"
                                v-model="date"
                                type="date"
                                placeholder="Pick a day"
                              />
                            </div>
                            <div>
                              <el-time-picker
                                v-if="days == 'single day'"
                                v-model="time"
                                is-range
                                start-placeholder="Start time"
                                end-placeholder="End time"
                                style="width: 300px"
                              />
                            </div>
                          </div>
                          {{ date[0] }}
                          {{ date[1] }}
                          {{ time[0] }}
                          {{ time[1] }}
                          <el-date-picker
                            v-if="!(days == 'single day')"
                            v-model="date"
                            type="daterange"
                            start-placeholder="Start Date"
                            end-placeholder="End Date"
                            :default-time="defaultTime1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="timeoffinput-text">
                      <div><i class="fa fa-bars-staggered"></i></div>
                      <div class="flex-fill">
                        <el-form-item label="">
                          <el-input
                            v-model="note"
                            placeholder="Note(Optional)"
                            type="textarea"
                          />
                        </el-form-item>
                      </div>
                    </div>
                    <div class="timeoffinput-text">
                      <div><i class="fa-solid fa-paperclip"></i></div>
                      <div>
                        <el-upload
                          drag
                          type="file"
                          accept="image/*"
                          multiple
                          @change="show"
                          ref="myimage"
                          class="customUpload"
                        >
                          <img :src="image" />
                          <i
                            class="fa fa-cloud-arrow-up"
                            style="color: lightgreen"
                          ></i>
                          <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                          </div>
                          <template #tip>
                            <div class="el-upload__tip">
                              Max file size : 5MB. File format : pdf, docx, png,
                              jpeg, ...
                            </div>
                          </template>
                        </el-upload>
                      </div>
                      <div>
                        <p style="margin-top: 10px">(Optinal)</p>
                      </div>
                    </div>

                    <div class="timeoffinput-radio">
                      <div>
                        <i
                          class="fa-regular fa-bell"
                          style="padding-top: 10px"
                        ></i>
                      </div>
                      <div class="linemanger">
                        <div class="flex-fill">
                          <el-input
                            v-model="member"
                            placeholder="Add member to notify them"
                            :prefix-icon="Search"
                          />
                        </div>

                        <div class="timeoffinput">
                          <div>
                            <p
                              style="
                                margin: 0;
                                font-size: 13px;
                                font-family: Sans-serif;
                              "
                            >
                              This request will be sent to your line manager
                            </p>
                          </div>
                          <div class="timeoffinput-user-dp">
                            <div>
                              <img
                                class="img-dp"
                                src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6366184c704381002693b1b8/Fi83N4EWLSMpPh58wQQCE.jpeg"
                              />
                            </div>
                            <div>
                              <h5 style="margin: 0">{{ manager }}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <el-button
                        :disabled="!isComplete"
                        type="primary"
                        @click="
                          timeoff();
                          showModal = false;
                        "
                        solid
                        >Submit</el-button
                      >
                      <el-button type="danger" @click="showModal = false"
                        >Close</el-button
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <!-- third part -->
            <div class="tasks-header">
              <h3>Your Leaves</h3>
            </div>
            <div class="tasks">
              <div>
                <el-table
                  height="400px"
                  :data="filteredLeaves"
                  style="width: 100%"
                  cell-class-name="my-cells"
                >
                  <el-table-column
                    prop="SelectType"
                    label="type"
                    class="flex-fill"
                  />
                  <el-table-column
                    prop="Leaves"
                    label="Leave"
                    class="flex-fill"
                  />
                  <el-table-column
                    prop="startDate"
                    label="Date"
                    class="flex-fill"
                    ><template v-slot="{ row }">
                      <span>{{
                        $dayjs(row.startDate).format("DD-MM-YYYY")
                      }}</span>
                    </template></el-table-column
                  >
                  <el-table-column
                    label="Status"
                    class="flex-fill"
                    prop="status"
                    sortable
                  >
                    <template v-slot="{ row }">
                      <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status">{{ row.status }}</span>
                      </badge>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projects from "../Tables/projects";
import {
  ElTimePicker,
  ElUpload,
  ElFormItem,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElButton,
  ElTable,
  ElTableColumn,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
} from "element-plus";
import axios from "axios";
export default {
  components: {
    ElTimePicker,
    ElUpload,
    ElFormItem,
    ElRadio,
    ElRadioGroup,
    ElInput,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElButton,
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [ElDropdown.name]: ElDropdown,
    [ElDropdownItem.name]: ElDropdownItem,
    [ElDropdownMenu.name]: ElDropdownMenu,
  },
  data() {
    return {
      image: "",
      selectdate: "",
      leavestatus: "",
      leavetype: "",
      leaveList: [],
      member: "",
      note: "",
      time: "",
      date: "",
      days: "",
      manager: "",
      showModal: false,
      projects,
      currentPage: 1,
      leaveType: [
        { value: "", label: "All" },
        { value: "sickleave", label: "Sick Leave (unpaid)" },
        { value: "unpaid", label: "Unpaid" },
      ],
      leaveStatus: [
        { value: "", label: "All" },
        { value: "approved", label: "Approved" },
        { value: "rejected", label: "Rejected" },
        { value: "pending", label: "Pending" },
      ],
      selects: {
        simple: "",
        leaves: [
          { value: "sickleave", label: "Sick Leave (unpaid)" },
          { value: "unpaid", label: "Unpaid" },
        ],
      },
    };
  },
  methods: {
    show() {
      var input = this.$refs;

      var url = URL.createObjectURL(input.myimage.files[0]);
      this.image = url;
    },
    async timeoff() {
      axios
        .post(
          `http://localhost:7000/leave/${
            JSON.parse(localStorage.getItem("user"))._id
          }`,
          {
            SelectType: this.selects.simple,
            Leaves: this.days,
            startDate: this.date[0] || this.date,
            endDate: this.date[1],
            startTime: this.time[0],
            endTime: this.time[1],
            Note: this.note,
            AddMember: this.member,
          }
        )
        .then((resp) => {
          if (resp) {
            const id = JSON.parse(localStorage.getItem("user"))._id;
            this.getLeaveList(id);
          }
        });
    },
    getLeaveList(id) {
      this.leaveList = [];
      axios.get(`http://localhost:7000/getLeaveList/${id}`).then((response) => {
        console.log(response.data);
        this.leaveList = response.data;
      });
    },
  },
  computed: {
    isComplete() {
      return (
        this.selects.simple &&
        this.days &&
        this.date &&
        this.note &&
        this.member
      );
    },
    filteredLeaves() {
      return this.leaveList
        .filter((leaveList) =>
          leaveList.SelectType.toLowerCase().includes(
            this.leavetype.toLowerCase()
          )
        )
        .filter((leaveList) =>
          leaveList.status
            .toLowerCase()
            .includes(this.leavestatus.toLowerCase())
        );
    },
  },
  mounted() {
    var id = JSON.parse(localStorage.getItem("user"))._id;
    this.getLeaveList(id);
    this.manager = JSON.parse(localStorage.getItem("user")).manager;
  },
};
</script>

<style>
*:focus {
  outline: none;
}
.singledayinput {
  display: flex;
  align-items: center;
  gap: 5px;
}

.img-dp {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 55;
  background-color: rgba(0, 0, 0, 0.6);
}
.linemanger {
  display: flex;
  flex: 1fr 1fr;
  flex-wrap: wrap;
}
.timeOffModal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
  padding: 25px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.2s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%), translateX(100vw);
}
.timeoffinput-user-dp {
  margin: 5px 0;
  padding: 0 2px;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 20px;
  gap: 5px;
}

.timeoffinput {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  flex: 20px 1fr;
}

.timeoffinput-radio {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  flex: 20px 1fr;
}

.timeoffinput-text {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex: 20px 1fr;
}

.leave-header {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 10px 0;
}

.leave {
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background: white;
  box-shadow: 0 0 1px grey;
}

.leave-body-header {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
}
.select-filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.select-button {
  border: none;
  box-shadow: 0 0 1px grey;
}
.leave-body {
  box-shadow: 0 0 2px lightgray;
  padding: 10px;
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
  background-color: white;
}
.logo-design {
  background-color: rgb(45, 206, 137);
  border-radius: 50%;
  padding: 2px 5px;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.customUpload > .el-upload.el-upload--text > .el-upload-dragger {
  height: 50px;
  align-items: center;
}
</style>
