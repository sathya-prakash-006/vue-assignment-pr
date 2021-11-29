<template>
  <div id="notFound">
    <h1 data-test="title">Page Not Found</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NotFound extends Vue {}
</script>

<style scoped></style>
