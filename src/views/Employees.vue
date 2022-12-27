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

    <div class="card mt--6 m-4 p-3" style="min-height: 500px">
      <!-- div for search menu -->
      <div class="search-view">
        <div class="search-office-select">
          <el-select v-model="officesearch" placeholder="All Offices">
            <el-option
              v-for="option in offices"
              :key="option.label"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>

        <div class="search-department-select">
          <el-select v-model="departsearch" placeholder="All Departments">
            <el-option
              v-for="option in departments"
              :key="option.label"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>

        <div class="search-user w-25">
          <el-input placeholder="Please Input" v-model="search" />
        </div>
      </div>
      <!-- second div for card view -->

      <!-- user card view youtube clone -->
      <!-- <div class="video-div">
                  <div
                    class="video-preview"
                    v-for="user in filteredUsers"
                    :key="user.id"
                  >
                    <div class="thumbnail-row">
                      <img
                        class="img1"
                        :src="user.profile_pic ? user.profile_pic : 'giff.gif'"
                      />
                    </div>
                    <div>
                      <h3>{{ user.fullName }}</h3>
                    </div>
                    <div>
                      <p style="margin: 0">{{ user.position }}</p>
                    </div>
                    <div>
                      <h4 style="margin: 0">ID{{ user._id.slice(3, 8) }}</h4>
                    </div>
                    <div>
                      <p style="margin: 0">+91 {{ user.number }}</p>
                    </div>
                    <div>
                      <a href="#">{{ user.email }}</a>
                    </div>

                    <div>
                      <hr style="margin: 10px 0" />
                      <p style="margin: 0">
                        <small>Line Manager {{ user.manager }}</small>
                      </p>
                    </div>
                  </div>
                </div> -->

      <!-- demo -->

      <div class="row">
        <div class="col-sm-4">
          <a
            href="#custom-modal"
            class="btn btn-custom waves-effect waves-light mb-4"
            data-animation="fadein"
            data-plugin="custommodal"
            data-overlayspeed="200"
            data-overlaycolor="#36404a"
            ><i class="mdi mdi-plus"></i
          ></a>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-lg-3" v-for="user in filteredUsers" :key="user.id">
          <div class="text-center card-box">
            <div class="member-card pt-2 pb-2">
              <div class="thumb-lg member-thumb mx-auto">
                <img
                  :src="user.profile_pic ? user.profile_pic : 'userpic.jpeg'"
                  class="rounded-circle img-thumbnail"
                  alt="profile-image"
                />
              </div>
              <div style="margin-top: 10px">
                <h4>{{ user.fullName }}</h4>

                <p class="text-muted">
                  {{ user.position }}
                </p>
                <h4 class="text-muted">
                  ID{{ user._id.slice(3, 8).toUpperCase() }}
                </h4>
                <p class="text-muted">
                  <span
                    ><a href="#" class="text-pink">{{ user.email }}</a></span
                  >
                </p>
              </div>
              <ul class="social-links list-inline">
                <li class="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href=""
                    data-original-title="Facebook"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href=""
                    data-original-title="Twitter"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href=""
                    data-original-title="Skype"
                    ><i class="fa fa-skype"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- container end -->

      <!-- container end-->
    </div>

    <!--  -->
  </div>
</template>

<script>
import axios from "axios";
import {
  ElInput,
  ElSelect,
  ElOption,
  ElTable,
  ElTableColumn,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
} from "element-plus";
export default {
  components: {
    ElInput,
    ElSelect,
    ElOption,
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [ElDropdown.name]: ElDropdown,
    [ElDropdownItem.name]: ElDropdownItem,
    [ElDropdownMenu.name]: ElDropdownMenu,
  },
  data() {
    return {
      departsearch: "",
      officesearch: "",
      search: "",
      users: [],
      currentPage: 1,
      input1: "",

      offices: [
        { value: "", label: "All Offices" },
        { value: "Ahmedabad", label: "Ahmedabad" },
        { value: "MediaNV", label: "MediaNV" },
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
    };
  },
  methods: {
    // finddepartment(value) {
    //   return this.users.filter((user) =>
    //     user.position.toLowerCase().includes(value.toLowerCase())
    //   );
    // },
    getUsers() {
      axios.get("http://localhost:7000/employees").then((response) => {
        console.log(response.data);
        this.users = response.data;
        console.log(this.users);
      });
    },
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    filteredUsers() {
      return this.users
        .filter((user) =>
          user.fullName.toLowerCase().includes(this.search.toLowerCase())
        )
        .filter((user) =>
          user.position.toLowerCase().includes(this.departsearch.toLowerCase())
        )
        .filter((user) =>
          user.office.toLowerCase().includes(this.officesearch.toLowerCase())
        );
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}
/* .userview {
  display: flex;
  flex-grow: 4;
  flex-wrap: wrap;
}
.user-flexview {
  border-radius: 10px;
  box-shadow: 0 0 2px;
  flex: 1;
  margin: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 10px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
} */

/* user card view css */
.video-preview {
  background-color: white;
  box-shadow: 0 0 3px grey;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  margin: 0;
  gap: 1px;
}
.thumbnail-row {
  margin: 0;
  height: 100px;
}
.thumbnail-row .img1 {
  height: 100%;
  padding: 10px;
  margin-top: 15px;
}
.video-div {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;

  column-gap: 20px;
  row-gap: 20px;
}
/* ends here */
.searchbar {
  padding: 2px 10px;
  width: 300px;
  border-radius: 5px;
  border: solid;
  border-width: 1px;
  background: transparent;
}
.search-item {
  width: 250px;
  padding: 3px 7px;
  font-size: 15px;
  margin-left: 5px;
  background: transparent;
  border: none;
}
.searchbar:hover {
  cursor: pointer;
  border-color: green;
  border-style: solid;
}

.search-view {
  height: 50px;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.search-office-select,
.search-department-select {
  margin-right: 10px;
}

.select-button {
  font-family: "Arial";
  background: transparent;
  padding: 7px 7px;
  border-radius: 5px;
}
.select-button:hover {
  border-color: green;
  cursor: pointer;
}

/* demo */

.card-box {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 2px grey;
}

.social-links li a {
  border-radius: 50%;
  color: rgba(121, 121, 121, 0.8);
  display: inline-block;
  height: 30px;
  line-height: 27px;
  border: 2px solid rgba(121, 121, 121, 0.5);
  text-align: center;
  width: 30px;
}

.social-links li a:hover {
  color: #797979;
  border: 2px solid #797979;
}
.thumb-lg {
  height: 88px;
  width: 88px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.text-pink {
  font-weight: 500;
  color: #580391 !important;
}
.btn-rounded {
  border-radius: 2em;
}
.text-muted {
  color: #02283b !important;
  font-weight: 200;
}
h4 {
  line-height: 22px;
  font-size: 18px;
}
</style>
