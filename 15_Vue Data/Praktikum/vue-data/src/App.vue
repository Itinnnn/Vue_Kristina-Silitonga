<template>
  <div id="app">
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.text-primary {
  color: rgba(25, 52, 95, 1) !important;
}

.text-muted {
  font-size: 12px;
}
</style>