<template>
  <div class="container">
    <div class="left-container">
      <div class="logo-container"></div>
      <h1 data-test="title">Micro Bank</h1>
    </div>
    <div>
      <h1 data-test="login">Login</h1>
      <div>
        <form name="form" @submit.prevent="handleRegister">
          <div>
            <label>Email:</label>
            <input v-model="user.email" type="text" name="email" />
          </div>
          <div>
            <label>Password:</label>
            <input v-model="user.password" type="password" name="password" />
          </div>
          <div v-if="errors.length" class="error">
            Please correct the following error(s):
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>
          <div>
            <button data-test="login">Login</button>
          </div>
          <router-link to="/register"
            >Don't have an account ? Create an Account</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { LoginUser } from "../utility/types";
import { namespace } from "vuex-class";
import { validEmail } from "../utility/validateEmail";
const User = namespace("User");

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {
  private user: LoginUser = {
    email: "",
    password: "",
  };
  private errors: Array<string> = [];

  @User.Action
  private login!: (data: LoginUser) => void;

  handleRegister(): void {
    // error validation

    console.log(this.user);
    this.errors = [];

    if (!this.user.email) {
      this.errors.push("Email required");
    } else if (!validEmail(this.user.email)) {
      this.errors.push("valid email required");
    }
    if (this.user.password === "") {
      this.errors.push("password can't be empty");
    }
    if (!this.errors.length) {
      this.login(this.user);
      this.$router.push("/dashbord");
    }
  }
}
</script>



<style scoped>
.container {
  display: flex;
  width: 98%;
  margin: auto;
  height: 622px;
}
.container > div {
  width: 50%;
}
h1 {
  margin-top: 40px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #1a1a1a;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

form > div {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-start;
}
input {
  width: 320px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
}

button {
  border: none;
  outline: none;
  width: 320px;
  height: 50px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  color: #ffff;
}

.left-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #d90429;
}
.logo-container {
  width: 400px;
  height: 400px;
  margin: auto;
  background-image: url("~@/assets/iconn.png");
}
.left-container h1 {
  width: 401px;
  height: 80px;
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #ffffff;
}
.error {
  color: rgb(230, 0, 0);
}
</style>
