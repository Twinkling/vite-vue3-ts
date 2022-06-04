<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <h1>Vite + Vue3 + TypeScript</h1>
    <div class="content">
      <h2>Getting Started</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  components: {},
  data() {
    return {};
  },
});
</script>

<style scoped>
.home {
}
.content {
  text-align: left;
  padding: 0 16px;
}
</style>
