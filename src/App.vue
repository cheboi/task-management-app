<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
  background: #f5f5f7;
  padding: 20px;
}
</style>
