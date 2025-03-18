<template>
  <div class="chart-container">
    <BarChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "vue-chartjs";

// Register Chart.js Components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const tasks = ref([]);
const chartData = ref({
  labels: ["Completed", "In Progress", "Upcoming"],
  datasets: [
    {
      label: "Tasks",
      data: [0, 0, 0],
      backgroundColor: ["green", "blue", "red"],
    },
  ],
});
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

// Load Task Data
const loadTasks = async () => {
  try {
    const response = await fetch("/data/task.json");
    const data = await response.json();
    tasks.value = data.tasks;

    // Count task statuses
    const statusCount = { Completed: 0, "In Progress": 0, Upcoming: 0 };
    tasks.value.forEach((task) => {
      if (statusCount[task.status] !== undefined) {
        statusCount[task.status]++;
      }
    });

    // Update chart data
    chartData.value.datasets[0].data = [
      statusCount.Completed,
      statusCount["In Progress"],
      statusCount.Upcoming,
    ];
  } catch (error) {
    console.error("Failed to load task data:", error);
  }
};

onMounted(loadTasks);
</script>

<style scoped>
.chart-container {
  height: 300px;
}
</style>
