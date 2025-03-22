<template>
  <div class="task-page">
    <!-- 🟢 Explore Section -->
    <div class="explore-header">
      <h2>🚀 Explore Tasks</h2>
      <div class="user-info">
        <i class="icon-bell"></i>
        <img src="@/assets/avatar.png" alt="User Avatar" class="avatar" />
      </div>
    </div>

    <!-- 🟡 Search & Filters Section -->
    <div class="filter-section">
      <div class="search-bar">
        <i class="icon-search"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          v-model="searchQuery"
        />
      </div>

      <div class="filter-dropdown">
        <i class="icon-category"></i>
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="sort-dropdown">
        <label>Sort by:</label>
        <select v-model="sortBy">
          <option value="latest">Latest</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>

    <!-- 🔵 Time Limit Section -->
    <div class="task-section">
      <div class="section-header">
        <h3>⏳ Time Limit Tasks</h3>
        <div class="scroll-buttons">
          <button @click="scrollLeft('timeLimitContainer')">⬅</button>
          <button @click="scrollRight('timeLimitContainer')">➡</button>
        </div>
      </div>

      <div class="task-list" ref="timeLimitContainer">
        <div class="task-card" v-for="task in limitedTimeTasks" :key="task.id">
          <img :src="task.image" alt="Task Image" class="task-image" />
          <div class="task-info">
            <h4>{{ task.name }}</h4>
            <p>{{ task.description }}</p>
            <div class="progress-bar">
              <div
                class="progress"
                :style="{ width: task.progress + '%' }"
              ></div>
            </div>
            <span class="progress-text">{{ task.progress }}% Complete</span>
            <span class="task-time">⏳ Time Left: {{ task.timeLeft }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 🟠 New Tasks Section -->
    <div class="task-section">
      <div class="section-header">
        <h3>🆕 Recent Added Tasks</h3>
        <div class="scroll-buttons">
          <button @click="scrollLeft('newTaskContainer')">⬅</button>
          <button @click="scrollRight('newTaskContainer')">➡</button>
        </div>
      </div>

      <div class="task-list" ref="newTaskContainer">
        <div class="task-card" v-for="task in limitedNewTasks" :key="task.id">
          <img :src="task.image" alt="Task Image" class="task-image" />
          <div class="task-info">
            <h4>{{ task.name }}</h4>
            <p>{{ task.description }}</p>
            <div class="progress-bar">
              <div
                class="progress"
                :style="{ width: task.progress + '%' }"
              ></div>
            </div>
            <span class="progress-text">{{ task.progress }}% Complete</span>
            <span class="task-time">⏳ Time Left: {{ task.timeLeft }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// State variables
const searchQuery = ref("");
const selectedCategory = ref("");
const sortBy = ref("latest");

// Dummy categories
const categories = ref(["Design", "Development", "Marketing", "Writing"]);

// Dummy tasks for time limit section
const timeLimitTasks = ref([
  {
    id: 1,
    name: "UI Redesign",
    description: "Revamp the website UI.",
    image: "../assets/testing.png",
    progress: 80,
    timeLeft: "2h 30m",
  },
  {
    id: 2,
    name: "API Development",
    description: "Build REST API.",
    image: "../assets/testing.png",
    progress: 50,
    timeLeft: "4h 15m",
  },
  {
    id: 3,
    name: "Bug Fixing",
    description: "Fix reported issues.",
    image: "../assets/testing.png",
    progress: 70,
    timeLeft: "1h 20m",
  },
  {
    id: 4,
    name: "Database Optimization",
    description: "Improve DB performance.",
    image: "../assets/testing.png",
    progress: 40,
    timeLeft: "5h 10m",
  },
]);

// Dummy tasks for new task section
const newTasks = ref([
  {
    id: 5,
    name: "Content Writing",
    description: "Write blog posts.",
    image: "../assets/testing.png",
    progress: 30,
    timeLeft: "6h 45m",
  },
  {
    id: 6,
    name: "Testing",
    description: "Run tests.",
    image: "../assets/testing.png",
    progress: 60,
    timeLeft: "3h 10m",
  },
  {
    id: 7,
    name: "SEO Optimization",
    description: "Improve site ranking.",
    image: "../assets/testing.png",
    progress: 50,
    timeLeft: "8h 30m",
  },
  {
    id: 8,
    name: "Marketing Strategy",
    description: "Plan next campaign.",
    image: "../assets/testing.png",
    progress: 20,
    timeLeft: "7h 50m",
  },
]);

// Display only 3 tasks at a time
const limitedTimeTasks = computed(() => timeLimitTasks.value.slice(0, 3));
const limitedNewTasks = computed(() => newTasks.value.slice(0, 3));

// Scroll Functionality
const scrollLeft = (containerRef) => {
  if (containerRef === "timeLimitContainer")
    document.querySelector(".task-list").scrollLeft -= 300;
  if (containerRef === "newTaskContainer")
    document.querySelector(".task-list").scrollLeft -= 300;
};

const scrollRight = (containerRef) => {
  if (containerRef === "timeLimitContainer")
    document.querySelector(".task-list").scrollLeft += 300;
  if (containerRef === "newTaskContainer")
    document.querySelector(".task-list").scrollLeft += 300;
};
</script>

<style scoped>
/* 🟢 Main Container */
.task-page {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  color: #141522;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f4f5fa;
}

/* 🟢 Explore Header */
.explore-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-bell {
  font-size: 1.5rem;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* 🟡 Filter Section */
.filter-section {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.search-bar input {
  border: none;
  outline: none;
  width: 100%;
}

/* Category & Sort Dropdowns */
.filter-dropdown,
.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

select {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

/* 🔵 Time Limit Section */
.time-limit-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scroll-buttons button {
  background: #10197a;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
}

.task-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70vw;
}
/* Task List (Horizontal Scroll) */
.task-list {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding-bottom: 10px;
}

.task-card {
  min-width: 350px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-time {
  font-size: 0.8rem;
  color: gray;
  margin-top: 5px;
}

.task-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.task-info {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #10197a;
  transition: width 0.3s ease-in-out;
}

.progress-text {
  font-size: 0.9rem;
  color: gray;
  margin-top: 5px;
}
</style>
