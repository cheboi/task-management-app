<template>
  <div class="mentors-page">
    <!-- Recent Mentors Section -->
    <div class="recent-mentors">
      <div class="section-header">
        <h2>Recent Mentors</h2>
        <div class="arrows">
          <button @click="scrollLeft" class="arrow left">&#8592;</button>
          <button @click="scrollRight" class="arrow right">&#8594;</button>
        </div>
      </div>
      <div class="scroll-container">
        <div class="mentors-wrapper" ref="recentMentorsRef">
          <div
            v-for="mentor in recentMentors"
            :key="mentor.id"
            class="mentor-card"
          >
            <img :src="mentor.image" alt="Mentor Image" class="mentor-image" />
            <div class="mentor-info">
              <h3>{{ mentor.name }}</h3>
              <p>⭐ {{ mentor.rating }} ({{ mentor.reviews }} reviews)</p>
              <p>📌 {{ mentor.tasks }} tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mentors List Section -->
    <div class="mentors-list">
      <h2>All Mentors</h2>
      <div class="grid">
        <div
          v-for="mentor in allMentors"
          :key="mentor.id"
          class="mentor-card detailed"
        >
          <img :src="mentor.image" alt="Mentor Image" class="mentor-image" />
          <div class="mentor-info">
            <h3>{{ mentor.name }}</h3>
            <p>{{ mentor.description }}</p>
            <p>⭐ {{ mentor.rating }} ({{ mentor.reviews }} reviews)</p>
            <p>📌 {{ mentor.tasks }} tasks</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const recentMentorsRef = ref(null);

// Dummy Data
const recentMentors = ref([
  {
    id: 1,
    name: "Alice Kamau",
    rating: 4.8,
    reviews: 120,
    tasks: 15,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "Bob Mark",
    rating: 4.7,
    reviews: 98,
    tasks: 12,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "Charlie Kiptoo",
    rating: 4.9,
    reviews: 150,
    tasks: 20,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
]);

const allMentors = ref([
  {
    id: 4,
    name: "David Ndii",
    description: "Expert in web development.",
    rating: 4.6,
    reviews: 80,
    tasks: 10,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
  {
    id: 5,
    name: "Emily Chelimo",
    description: "Skilled UI/UX designer.",
    rating: 4.9,
    reviews: 95,
    tasks: 18,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
  {
    id: 6,
    name: "Frank Kipchichir",
    description: "Data scientist with 5+ years experience.",
    rating: 4.8,
    reviews: 130,
    tasks: 22,
    image: new URL("../assets/avatar.png", import.meta.url).href,
  },
]);

const scrollLeft = () => {
  if (recentMentorsRef.value) {
    recentMentorsRef.value.scrollBy({ left: -300, behavior: "smooth" });
  }
};
const scrollRight = () => {
  if (recentMentorsRef.value) {
    recentMentorsRef.value.scrollBy({ left: 300, behavior: "smooth" });
  }
};
</script>

<style scoped>.mentors-page {
    padding: 20px;
    background: #f5f5f7;
    min-height: 100vh;
    color: #10197a;
  }
  
  .recent-mentors {
    position: relative;
    margin-bottom: 30px;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .arrows {
    display: flex;
    gap: 10px;
  }
  
  .scroll-container {
    display: flex;
    overflow: hidden;
    width: 100%;
  }
  
  .mentors-wrapper {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px;
    padding: 10px;
  }
  
  .mentor-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 200px;
    flex-shrink: 0; /* Ensures smooth scrolling */
  }
  
  .mentor-card.detailed {
    text-align: left;
  }
  
  .mentor-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .arrow {
    background: #10197a;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
</style>
