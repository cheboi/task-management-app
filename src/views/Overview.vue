<template>
  <div class="overview-container">
    <div class="left-section">
      <!-- User Greetings -->
      <div class="header">
        <div>
          <h2>👋 Hello, Moses Cheboi</h2>
          <p>Welcome back to your task dashboard!</p>
        </div>
        <div class="user-info">
          <i class="icon-bell"></i>
          <img src="@/assets/avatar.png" alt="User Avatar" class="avatar" />
        </div>
      </div>

      <!-- Running Task Chart -->
      <div class="card">
        <h3>📊 Running Task Progress</h3>
        <TaskChart />
      </div>

      <!-- Activities Graph -->
      <div class="card">
        <h3>📈 Activities Overview</h3>
        <ActivityGraph />
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <!-- Calendar -->
      <div class="card">
        <h3>📅 Calendar</h3>
        <CalendarComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskChart from "../components/TaskChart.vue";
import ActivityGraph from "../components/ActivityGraph.vue";
import CalendarComponent from "../components/CalendarComponent.vue";
</script>

<style scoped>
.overview-container {
  display: flex;
  gap: 20px;
  width: 100%;
  color: #141522;
}

.left-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-bell {
  font-size: 20px;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
