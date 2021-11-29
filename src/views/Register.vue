<template>
  <div class="container" id="register">
    <div class="left-container">
      <div class="logo-container"></div>
      <h1 data-test="title">Micro Bank</h1>
    </div>
    <div>
      <h1 data-test="create-account">Create an Account</h1>
      <div>
        <form name="form" @submit.prevent="submit">
          <div>
            <label>Fullname:</label>
            <input
              v-model="user.name"
              type="text"
              name="name"
              data-test="name"
            />
          </div>
          <div>
            <label>Date of incorparation:</label>
            <input
              v-model="user.date"
              type="date"
              name="date"
              data-test="date"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              v-model="user.email"
              type="text"
              name="email"
              data-test="email"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              v-model="user.password"
              type="password"
              name="password"
              data-test="password"
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              v-model="user.confirmpassword"
              type="password"
              name="confirmpassword"
              data-test="confirmpassword"
            />
          </div>
          <div v-if="errors.length" class="error" data-test="error">
            Please correct the following error(s):
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>
          <div>
            <button type="submit">Create an Account</button>
          </div>
          <router-link to="/login">Already have an Account? Login</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ProfileUser } from "../utility/types";
import { namespace } from "vuex-class";
const User = namespace("User");
import { validateRegisterInputs } from "../utility/validateEmail";

@Component({
  components: {},
})
export default class Register extends Vue {
  private user: ProfileUser = {
    name: "",
    date: new Date(),
    email: "",
    password: "",
    confirmpassword: "",
  };
  private errors: Array<string> = [];

  @User.Action
  private register!: (data: ProfileUser) => void;

  submit(): void {
    this.errors = [];
    this.$emit("submit", this.user);
    validateRegisterInputs(
      this.errors,
      this.user.name,
      this.user.email,
      this.user.password,
      this.user.confirmpassword
    );

    if (!this.errors.length) {
      this.register(this.user);
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
