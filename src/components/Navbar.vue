<template>
  <nav>
    <section data-test="nav-title">
      <span class="title1">Micro</span>
      <span class="title2">Bank</span>
    </section>
    <section class="left-section">
      <img src="" alt="Icon" />
      <div class="profile">{{ name }}</div>
    </section>
  </nav>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private name!: string;
}
</script>



<style scoped>
nav {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
}

.title1,
.title2 {
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #d90429;
}
.title2 {
  color: #000000;
}

.left-section {
  display: flex;
  gap: 8px;
  align-items: center;
}
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  color: #ffffff;
}
</style>