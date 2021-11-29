<template>
  <section class="summary-cont">
    <span>
      <p data-test="title">Account Number</p>
      <h5 data-test="account">278132856379</h5>
    </span>
    <span>
      <p data-test="income">Income</p>
      <h5 data-test="incomeblc">$2478</h5>
    </span>
    <span>
      <p data-test="spends">Spends</p>
      <h5 data-test="spendsblnc">4275</h5>
    </span>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProfileSummary extends Vue {}
</script>



<style scoped>
.summary-cont,
.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff0f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
}
</style>