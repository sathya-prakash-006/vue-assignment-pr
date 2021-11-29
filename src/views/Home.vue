<template>
  <div>
    <div>
      <div v-if="userDetails">
        <nav-bar name="S"></nav-bar>
      </div>
      <div>
        <h1 id="title">PROFILE DETAILS</h1>
      </div>
      <profile-summary></profile-summary>

      <section v-if="userDetails" class="profile">
        <span>
          <p data-test="name">Name</p>
          <h4>{{ userDetails.name.toUpperCase() }}</h4>
        </span>
        <span>
          <p>Email</p>
          <h4>{{ userDetails.email }}</h4>
        </span>
      </section>
      <button @click="toggleUpdate()" id="btn1">
        {{ toggle ? "CANCEL" : "UPDATE" }}
      </button>

      <div class="form-cont" v-if="toggle" data-test="toggle">
        <!-- <form name="form" @submit.prevent="submit()"> -->
        <div>
          <label>Full Name:</label>
          <input v-model="user.name" type="text" name="name" id="input1" />
        </div>
        <div>
          <label>Email:</label>
          <input v-model="user.email" type="text" name="email" id="input2" />
        </div>
        <div v-if="errors.length" class="error">
          Please correct the following error(s):
          <ul>
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </ul>
        </div>
        <div>
          <button class="btn" @click="submit" id="btn2">SUBMIT</button>
        </div>
        <!-- </form> -->
      </div>
      <div>
        <button class="exit-btn btn" @click="exit()" id="exit">EXIT</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "../components/Navbar.vue";
import ProfileSummary from "../components/Summary.vue";
import { UpdateUser, ProfileUser } from "../utility/types";
import { namespace } from "vuex-class";
const User = namespace("User");
import { updateProfile } from "../utility/validateEmail";

@Component({
  components: {
    NavBar,
    ProfileSummary,
  },
})
export default class Home extends Vue {
  private toggle = false;
  public user = {
    name: "",
    email: "",
  };
  private errors: Array<string> = [];

  @User.Action
  private update!: (data: UpdateUser) => void;

  @User.Getter
  public userDetails!: ProfileUser;
  public error!: boolean;

  toggleUpdate(): boolean {
    return (this.toggle = !this.toggle);
  }
  exit(): void {
    this.$router.push("/login");
  }

  submit(): void {
    const user = {
      name: this.user.name,
      email: this.user.email,
      id: this.userDetails.id,
    };
    this.errors = [];
    updateProfile(this.errors, this.user.email, this.user.name);

    if (!this.errors.length) {
      this.update(user);
      this.toggle = false;
    }
  }
}
</script>

<style scoped>
.btn {
  border: none;
  outline: none;
  background-color: #d90427bd;
  color: #ffffff;
  width: 150px;
  height: 45px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.exit-btn {
  background-color: rgb(179, 174, 174);
}
.form-cont {
  width: 40%;
  min-height: 230px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
}
form {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 20px;
}
input {
  width: 320px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
}
.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff0f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
}

.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff0f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
  margin-top: 50px;
}
.error {
  color: rgba(255, 0, 0, 0.986);
}
</style>
