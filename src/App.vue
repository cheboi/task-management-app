<template>
  <div class="app-container">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.content {
  flex: 1;
  margin-left: 180px;
  background: #f5f5f7;
  padding: 20px;
}
</style>
