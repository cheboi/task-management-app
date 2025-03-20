<template>
  <div class="task-page">
    <!-- 🟢 Explore Section -->
    <div class="explore-header">
      <h2>Explore Tasks</h2>
      <div class="user-info">
        <i class="icon-bell"></i>
        <img src="@/assets/avatar.png" alt="User Avatar" class="avatar" />
      </div>
    </div>

    <!-- 🟡 Search & Filters Section -->
    <div class="filter-section">
      <!-- Search Bar -->
      <div class="search-bar">
        <i class="icon-search"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          v-model="searchQuery"
        />
      </div>

      <!-- Category Filter -->
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

      <!-- Sort By -->
      <div class="sort-dropdown">
        <label>Sort by:</label>
        <select v-model="sortBy">
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State variables
const searchQuery = ref("");
const selectedCategory = ref("");
const sortBy = ref("latest");

// Dummy categories
const categories = ref(["Design", "Development", "Marketing", "Writing"]);
</script>

<style scoped>
/* 🟢 Main Container */
.task-page {
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  color: #141522;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  color:#141522;
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
</style>
