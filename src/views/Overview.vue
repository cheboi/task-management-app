<template>
  <div class="overview-container">
    <!-- Left Section -->
    <div class="left-section">
      <!-- User Greetings -->
      <div class="header">
        <div>
          <h2>👋 Hello, John Doe</h2>
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
        <TaskGraph />
      </div>

      <!-- Recent Activities -->
      <div class="card">
        <h3>⚡ Recent Activities</h3>
        <ul class="activities-list">
          <li v-for="activity in recentActivities" :key="activity.id">
            <span class="activity-text">{{ activity.text }}</span>
            <span class="activity-time">{{ activity.time }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <!-- Calendar -->
      <div class="card">
        <h3>📅 Calendar</h3>
        <CalendarComponent />
      </div>

      <!-- Upcoming Deadlines -->
      <div class="card">
        <h3>⏳ Upcoming Deadlines</h3>
        <ul class="deadlines-list">
          <li v-for="task in upcomingDeadlines" :key="task.id">
            <span class="task-name">{{ task.name }}</span>
            <span class="task-date">{{ task.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskGraph from "@/components/TaskGraph.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";

// Reactive State for Data
const recentActivities = ref([]);
const upcomingDeadlines = ref([]);

// Load data from task.json
const loadTasks = async () => {
  try {
    const response = await fetch("/data/task.json");
    const data = await response.json();
    recentActivities.value = data.recent_activities;
    upcomingDeadlines.value = data.upcoming_deadlines;
  } catch (error) {
    console.error("Failed to load task data:", error);
  }
};

// Fetch data on component mount
onMounted(loadTasks);
</script>

<style scoped>
.overview-container {
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
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
  width: 100%;
}

.activities-list,
.deadlines-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activities-list li,
.deadlines-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.task-name,
.activity-text {
  font-weight: 500;
}

.task-date,
.activity-time {
  color: gray;
  font-size: 0.9em;
}
</style>
