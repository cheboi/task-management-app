<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

// Reactive State for Calendar
const tasks = ref([]);
const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  events: [],
});

// Load Task Data
const loadTasks = async () => {
  try {
    const response = await fetch("/data/task.json");
    const data = await response.json();
    tasks.value = data.tasks;

    // Convert tasks to FullCalendar event format
    calendarOptions.value.events = tasks.value.map((task) => ({
      title: task.title,
      start: task.due_date,
      color:
        task.status === "Completed"
          ? "green"
          : task.status === "In Progress"
          ? "blue"
          : "red",
    }));
  } catch (error) {
    console.error("Failed to load task data:", error);
  }
};

onMounted(loadTasks);
</script>

<style scoped>
.calendar-container {
  height: 300px;
  overflow: hidden;
}
</style>
