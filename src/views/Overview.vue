<template>
  <div class="overview-container">
    <div class="left-section">
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
        <TaskGraph />
      </div>

      <!-- Recent Activities -->
      <div class="card">
        <ul class="activities-list">
          <h3>⚡ Recent Activities</h3>
          <li v-for="activity in recentActivities" :key="activity.id">
            <span class="activity-text">{{ activity.text }}</span>
            <span class="activity-time">{{ activity.time }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="right-section">
      <!-- Calendar -->
      <div class="card-calender">
        <h3>📅 Calendar</h3>
        <CalendarComponent />
      </div>

      <div class="card-dealline">
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

onMounted(loadTasks);
</script>

<style scoped>
/* Main Layout */
.overview-container {
  display: flex;
  gap: 24px;
  width: 100%;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  background-color: #f5f5f7;
  color: #141522;
}

/* Left Section - Larger than right */
.left-section {
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Right Section - Smaller */
.right-section {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Header - Greeting & User Info */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.header h2 {
  font-size: 1.6rem;
  font-weight: bold;
  color: #10197a;
}

.header p {
  font-size: 1rem;
  color: #666;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-bell {
  font-size: 20px;
  color: #10197a;
  cursor: pointer;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #10197a;
}

/* Cards */
.card {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  gap: 50;
}

.card h3 {
  font-size: 1.4rem;
  color: #10197a;
  margin-bottom: 10px;
}

/* Activities List */
.activities-list,
.deadlines-list {
  list-style: none;
  padding: 0;
  margin: auto;
}

.activities-list li,
.deadlines-list li {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  transition: background 0.2s;
}

.activities-list li:hover,
.deadlines-list li:hover {
  background: rgba(16, 25, 122, 0.05);
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

/* Responsive Design */
@media (max-width: 1024px) {
  .overview-container {
    flex-direction: column;
    gap: 16px;
  }

  .left-section,
  .right-section {
    flex: 1;
    width: 100%;
  }
}
</style>
