<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-5 py-lg-5 pt-lg-7">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Sign In to account</h1>
              <div class="audun_success" v-if="model.alert">
                <div><i class="fa fa-check-circle" aria-hidden="true"></i></div>
                <div v-html="model.alert"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card bg-secondary border-0">
            <div class="card-header bg-transparent pb-4">
              <div class="text-muted text-center mt-2 mb-4">
                <small>Sign In with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </div>
            <div class="card-body px-lg-4 py-lg-4">
              <div class="text-center text-muted mb-2">
                <small>Or sign In with credentials</small>
              </div>
              <div class="register-container">
                <div class="email-input">
                  <i
                    class="fa-solid fa-envelope fa-xs"
                    style="margin: 0 5px"
                  ></i>
                  <input
                    class="input-form"
                    type="email"
                    name="email"
                    placeholder="Email"
                    v-model="model.email"
                  />
                </div>
                <div class="password-input">
                  <i class="fa-solid fa-lock fa-xs" style="margin: 0 5px"></i>
                  <input
                    class="input-form"
                    type="password"
                    name="password"
                    placeholder="Password"
                    v-model="model.password"
                  />
                </div>
                <div class="error" v-html="model.error"></div>
                <div class="btn-input">
                  <button @click="register">Login</button>
                </div>
                <div class="user-login">
                  <p>
                    New User?
                    <router-link to="/register">
                      <span class="signup-span">Signup</span>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Form } from "vee-validate";
// import * as Yup from "yup";
import Authentication from "C:/vishnu/vue-argon-dashboard-pro-v2.0.0/src/services/Authentication";
export default {
  name: "register",
  // components: {
  //   Form,
  // },
  data() {
    return {
      model: {
        email: "",
        password: "",
        agree: false,
        error: null,
      },
    };
  },
  methods: {
    navigatTo(route) {
      this.$router.push(route);
    },
    async login() {
      try {
        const response = await Authentication.login({
          email: this.model.email,
          password: this.model.password,
        });

        if (response != null) {
          this.navigatTo({ name: "dashboard" });
        }

        this.model.error = await null;
      } catch (err) {
        this.model.error = err;
        console.log(this.model.error);
      }
    },
  },
  // setup() {
  //   function onSubmit(values) {
  //     alert(JSON.stringify(values, null, 2));
  //   }

  //   // const schema = Yup.object().shape({
  //   //   fullName: Yup.string().required().label("The Full Name"),
  //   //   email: Yup.string().email().required().label("The Email"),
  //   //   password: Yup.string().min(5).required().label("The Password"),
  //   // });

  //   // return {
  //   //   onSubmit,
  //   //   schema,
  //   // };
  // },
};
</script>
<style>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
*:focus {
  outline: none;
}
.register-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  min-width: 50px;
}
.email-input,
.password-input {
  margin: 5px 0;
  display: flex;
  justify-items: center;
  align-items: center;
  border-radius: 5px;
  padding: 3px;
  box-shadow: 0 0 2px gray;
}
.input-form {
  background: transparent;
  width: 300px;
  margin: 5px 0;
  padding: 0 10px;
  border: none;
  min-width: 100px;
}
.input-form::placeholder {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
}
.btn-input button {
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 15px;
  border: none;
  color: white;
  background-color: rgb(94, 114, 228);
  transition: all 0.3s;
}
.btn-input button:hover {
  cursor: pointer;
  box-shadow: 2px 2px 3px rgb(92, 92, 92);
  background-color: rgb(37, 86, 170);
  font-weight: 400;
}
.register-form {
  background-color: white;
}
.error {
  color: red;
}

.alert {
  position: relative;
  width: 300px;
  min-height: 100px;
  margin-top: 50px;
  border: 1px solid #666;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 20px 30px;
}

.audun_success {
  display: inline-block;
  letter-spacing: 0.2ch;
  font-size: 15px;
  color: #ffffff;
  background-color: #7ddf7c;
  font-family: "Source Sans Pro", sans-serif;
  border-radius: 0.5em;
  border: 1px solid;
  margin: 10px 0px;
  padding: 12px;
  width: 400px;
}
.user-login p {
  color: black;
  margin-top: 5px;
  font-size: 15px;
}
.signup-span {
  text-decoration: underline;
  color: rgb(94, 114, 228);
  transition: all 0.3s;
}
.signup-span:hover {
  cursor: pointer;
  color: rgb(37, 86, 170);
  font-weight: bold;
}
</style>
