<template>
  <div>
    <base-header>
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <base-button
            size="sm"
            type="neutral"
            @click="
              ((allusercontainer = true),
              (alltaskcontainer = false),
              (alltaskcontainer = false)),
                (pagename = 'All Users')
            "
            >All users</base-button
          >
          <base-button
            size="sm"
            type="neutral"
            @click="
              ((allleavecontainer = true),
              (allusercontainer = false),
              (alltaskcontainer = false)),
                (pagename = 'Leave Requests')
            "
            >Leaves</base-button
          >
          <base-button
            size="sm"
            type="neutral"
            @click="
              ((alltaskcontainer = true),
              (allusercontainer = false),
              (allleavecontainer = false)),
                (pagename = 'Tasks')
            "
            >Tasks</base-button
          >
        </div>
        <div class="col-lg-6 col-5 text-center">
          <h6 class="h2 text-white d-inline-block mb-0">
            {{ $route.name }} > {{ pagename }}
          </h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </div>
      </div>
    </base-header>

    <div class="container" v-if="allusercontainer">
      <!-- header -->
      <div class="leave-body">
        <div class="leave-body-header">
          <div>
            <span style="font-size: 20px; color: Dodgerblue">
              <i class="fa fa-users"></i>
            </span>
          </div>
          <div><h3 style="margin: 0">All Users</h3></div>
        </div>

        <!-- second part -->
        <div class="select-filter">
          <div>
            <el-select v-model="department" placeholder="Select type">
              <el-option
                v-for="option in departments"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </div>
          <div>
            <el-select v-model="manager" placeholder="Select status">
              <el-option
                v-for="option in managers"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </div>
          <div class="search-user">
            <el-input
              placeholder="user"
              style="width: 400px"
              v-model="searchName"
            />
          </div>

          <div>
            <el-button type="primary" @click="showModal = true" solid
              >Add User</el-button
            >

            <transition name="fade" appear>
              <div class="modal-overlay" v-if="showModal"></div>
            </transition>

            <transition name="slide" appear>
              <div class="timeOffModal" v-if="showModal">
                <h2>New User</h2>
                <hr style="margin: 20px 0" />
                <Form @submit="AddNewUser" :validation-schema="schema">
                  <h6 class="heading-small text-muted mb-4">
                    Enter User Details
                  </h6>
                  <div>
                    <div>
                      <base-input
                        label="Full name"
                        name="fullName"
                        placeholder="Enter name"
                        rules="required"
                      >
                      </base-input>
                    </div>

                    <div>
                      <base-input
                        label="Email"
                        name="email"
                        placeholder="Enter email"
                        rules="required"
                        success-message="Looks good!"
                      >
                      </base-input>
                    </div>
                    <div>
                      <base-input label="Select Department" name="dep">
                        <el-select
                          v-model="selectDepart"
                          placeholder="Select type"
                        >
                          <el-option
                            v-for="option in departments"
                            :key="option.label"
                            :label="option.label"
                            :value="option.value"
                          />
                        </el-select>
                      </base-input>
                    </div>
                    <div>
                      <base-input
                        label="password"
                        name="password"
                        placeholder="Enter password"
                        rules="required"
                      >
                      </base-input>
                    </div>
                    <div
                      v-html="error"
                      style="color: red; text-align: center"
                    ></div>
                  </div>

                  <base-button type="success" native-type="submit"
                    >Submit</base-button
                  >
                  <base-button type="danger" @click="showModal = false"
                    >Cancel</base-button
                  >
                </Form>
              </div>
            </transition>
          </div>
        </div>

        <!-- third part -->

        <div class="tasks">
          <div>
            <el-table
              height="500px"
              scrollbar-always-on="true"
              :data="filteredUsers"
              style="width: 100%"
              cell-class-name="my-cells"
            >
              <el-table-column prop="fullName" label="Name" class="flex-fill"
                ><template v-slot="{ row }">
                  <img class="profile_image" :src="row.profile_pic" />
                  <span>{{ row.fullName }}</span>
                </template></el-table-column
              >
              <el-table-column prop="email" label="Email" class="flex-fill" />
              <el-table-column
                prop="position"
                label="Department"
                class="flex-fill"
              />
              <el-table-column
                label="Manager"
                class="flex-fill"
                prop="manager"
                sortable
              />
              <el-table-column
                label="Office"
                class="flex-fill"
                prop="office"
                sortable
              />
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <!-- leave list for admin -->
    <div class="container" v-if="allleavecontainer">
      <div class="leave-body">
        <div class="leave-body-header">
          <div>
            <span style="font-size: 20px; color: Dodgerblue">
              <i class="fa fa-business-time"></i>
            </span>
          </div>
          <div><h3 style="margin: 0">All Leave Requests</h3></div>
        </div>

        <!-- second part -->
        <div class="select-filter">
          <div>
            <el-select v-model="department" placeholder="Select type">
              <el-option
                v-for="option in departments"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </div>
          <div>
            <el-select v-model="manager" placeholder="Select status">
              <el-option
                v-for="option in managers"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </div>
          <div class="search-user">
            <el-input
              placeholder="user"
              style="width: 400px"
              v-model="searchName"
            />
          </div>
        </div>

        <!-- third part -->

        <div class="tasks">
          <div>
            <el-table
              :data="leaveReq"
              style="width: 100%"
              cell-class-name="my-cells"
            >
              <el-table-column
                prop="SelectType"
                label="Type"
                class="flex-fill"
              />

              <el-table-column prop="Leaves" label="Days" class="flex-fill" />
              <el-table-column
                label="Date"
                class="flex-fill"
                prop="SelectDate"
                sortable
              />

              <el-table-column label="Status" class="flex-fill" prop="status" />
              <el-table-column align="right">
                <template v-slot="{ row }">
                  <el-button
                    size="small"
                    type="success"
                    @click="updateLeave(row, 'Approved')"
                    >Approve</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="updateLeave(row, 'Rejected')"
                    >Reject</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>

      <!-- previous lists -->
      <div class="leave-body">
        <div class="leave-body-header">
          <div>
            <span style="font-size: 20px; color: Dodgerblue">
              <i class="fa fa-business-time"></i>
            </span>
          </div>
          <div><h3 style="margin: 0">All Previous Leaves</h3></div>
        </div>

        <!-- second part -->

        <!-- third part -->

        <div class="tasks">
          <div>
            <el-table
              height="400px"
              :data="prevLeaves"
              cell-class-name="my-cells"
            >
              <el-table-column
                prop="SelectType"
                label="type"
                class="flex-fill"
              />
              <el-table-column prop="Leaves" label="Leave" class="flex-fill" />
              <el-table-column
                prop="SelectDate"
                label="Date"
                class="flex-fill"
              />
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

    <!-- all tasks -->
    <div class="container" v-if="alltaskcontainer">
      <!-- header -->
      <div class="leave-body">
        <div class="leave-body-header">
          <div>
            <span style="font-size: 20px; color: Dodgerblue">
              <i class="fa fa-users"></i>
            </span>
          </div>
          <div><h3 style="margin: 0">All Tasks</h3></div>
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
            <el-button type="primary" @click="showTaskModal = true" solid
              >+ New Task</el-button
            >
            <transition name="fade" appear>
              <div class="modal-overlay" v-if="showTaskModal"></div>
            </transition>

            <transition name="slide" appear>
              <div class="timeOffModal" v-if="showTaskModal">
                <h2>Add Task</h2>
                <hr style="margin: 20px 0" />
                <div>
                  <div>
                    <base-input label="Task Name">
                      <el-input
                        v-model="taskname"
                        placeholder="Enter Task"
                      ></el-input>
                    </base-input>
                  </div>
                  <div class="flex-fill">
                    <base-input label="Select Users">
                      <el-select
                        label="taskname"
                        v-model="selectedusers"
                        multiple
                        placeholder="Select Users"
                      >
                        <el-option
                          v-for="option in users"
                          :key="option.label"
                          :label="option.label"
                          :value="option.value"
                        />
                      </el-select>
                    </base-input>
                  </div>
                  <base-input label="Select Due Date">
                    <el-date-picker
                      placeholder="Date"
                      v-model="duedate"
                      type="date"
                      :default-time="defaultTime1"
                  /></base-input>
                </div>

                <div>
                  <el-button
                    type="primary"
                    @click="
                      AddNewUserTask();
                      showTaskModal = false;
                    "
                    solid
                    >Submit</el-button
                  >
                  <el-button type="danger" @click="showTaskModal = false"
                    >Close</el-button
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- third part -->

        <div class="tasks">
          <div>
            <el-table
              height="700px"
              scrollbar-always-on="true"
              :data="alltasklist"
              style="width: 100%"
              cell-class-name="my-cells"
            >
              <el-table-column
                height="200px"
                prop="taskName"
                label="Task"
                class="flex-fill"
              />
              <el-table-column prop="DueDate" label="Date" class="flex-fill" />
              <el-table-column
                prop="addMember"
                label="User"
                class="flex-fill"
              />
              <el-table-column
                label="Status"
                class="flex-fill"
                prop="status"
                sortable
              >
                <template v-slot="{ row }">
                  <badge class="badge-dot mr-4" type="">
                    <span
                      :class="`bg-${row.statusType}`"
                      style="
                        color: white;
                        padding: 5px;
                        opacity: 0.7;
                        border-radius: 5px;
                      "
                      >{{ row.status }}</span
                    >
                  </badge>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
import projects from "../Tables/projects";
import {
  ElDatePicker,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
  ElTable,
  ElTableColumn,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
} from "element-plus";

export default {
  components: {
    Form,
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
      duedate: "",
      taskname: "",
      selectedusers: [],
      duedate: "",
      task: "",
      image: "",
      selectdate: "",
      manager: "",
      department: "",
      searchName: "",
      selectDepart: "",
      allUsers: [],
      leaveReq: [],
      list: [],
      prevLeaves: [],
      alltasklist: [],
      member: "",
      note: "",
      time: "",
      date: "",
      days: "",
      showModal: false,
      showLeaveModal: false,
      projects,
      currentPage: 1,
      error: null,
      allusercontainer: true,
      allleavecontainer: false,
      alltaskcontainer: false,
      showTaskModal: false,
      pagename: "All Users",
      users: [],

      managers: [
        { value: "", label: "All" },
        { value: "jay", label: "Jay Dalal" },
        { value: "ajay", label: "Ajay" },
      ],
      departments: [
        { value: "", label: "All Departments" },
        { value: "Admin", label: "Admin" },
        { value: "CSR", label: "CSR" },
        { value: "Software Development", label: "Software Development" },
        { value: "Content Writer", label: "Content Writer" },
        { value: "Designing", label: "Designing" },
        { value: "HR", label: "HR" },
        { value: "MediaNV Ahmedabad", label: "MediaNV Ahmedabad" },
        { value: "MediaNV Headquarter", label: "MediaNV Headquarter" },
        { value: "Wordpress Developement", label: "Wordpress Developement" },
        { value: "PPC", label: "PPC" },
        { value: "SEO", label: "SEO" },
      ],
      taskstatus: [
        { value: "", label: "All" },
        { value: "Completed", label: "Completed" },
        { value: "Pending", label: "Pending" },
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
    updateLeave(row, value) {
      const id = row._id;
      console.log(value);
      axios
        .post(`http://localhost:7000/updateleavestatus/${id}`, {
          status: value,
        })
        .then((resp) => {
          if (resp) {
            this.getLeaves();
          }
        });
    },
    async AddNewUser(value) {
      axios
        .post(`http://localhost:7000/register/user`, {
          fullName: value.fullName,
          email: value.email,
          position: this.selectDepart,
          password: value.password,
        })
        .then((response) => {
          if (response.data == "user exist") {
            this.error = "This email already exist!";
          } else {
            this.showModal = false;
            this.error = null;
            this.getEmployees();
          }
        });
    },

    AddNewUserTask() {
      axios
        .post("http://localhost:7000/Checklist", {
          taskName: this.taskname,
          taskType: "Checkbox",
          addMember: this.selectedusers,
          DueDate: JSON.stringify(this.duedate).slice(1, 11),
          Description: "urgent",
          status: "Pending",
          statusType: "danger",
        })
        .then((response) => {
          this.getallTasks();
          this.taskname = "";
          this.selectedusers = "";
          this.duedate = "";
        });
    },
    getEmployees() {
      this.allUsers = [];
      this.users = [];
      axios.get(`http://localhost:7000/employees`).then((response) => {
        this.allUsers = response.data;
        for (let i = 0; i < this.allUsers.length; i++) {
          this.users.push({
            value: this.allUsers[i]._id,
            label: this.allUsers[i].fullName,
          });
        }
        console.log(this.users);
      });
    },
    getLeaves() {
      this.leaveReq = [];
      axios.get(`http://localhost:7000/leavereq`).then((response) => {
        this.list = response.data;
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].status == "Pending") {
            this.leaveReq.push(this.list[i]);
          } else {
            this.prevLeaves.push(this.list[i]);
          }
        }
      });
    },
    getallTasks() {
      this.alltasklist = [];
      axios.get(`http://localhost:7000/alltask`).then((response) => {
        this.alltasklist = response.data;
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
    filteredUsers() {
      return this.allUsers
        .filter((allUsers) =>
          allUsers.position
            .toLowerCase()
            .includes(this.department.toLowerCase())
        )
        .filter((allUsers) =>
          allUsers.manager.toLowerCase().includes(this.manager.toLowerCase())
        )
        .filter((allUsers) =>
          allUsers.fullName
            .toLowerCase()
            .includes(this.searchName.toLowerCase())
        );
    },
  },
  mounted() {
    this.getEmployees();
    this.getLeaves();
    this.getallTasks();
  },
  setup() {
    const schema = Yup.object().shape({
      fullName: Yup.string().required().label("The Full Name"),
      email: Yup.string().email().required().label("The email"),

      password: Yup.string().min(5).required().label("The password"),
    });

    return {
      schema,
    };
  },
};
</script>

<style>
*:focus {
  outline: none;
}
.el-table__body-wrapper {
  background: white !important;
}
.el-table__header {
  background: white !important;
}

.singledayinput {
  display: flex;
  align-items: center;
  gap: 5px;
}
.profile_image {
  height: 30px;
  width: auto;
  margin: 5px;
  border-radius: 50%;
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
  margin: 20px 0;
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
