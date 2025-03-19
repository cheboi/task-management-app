<template>
  <div class="chart-container">
    <Bar
      v-if="chartData"
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
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

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const tasks = ref([]);
const chartData = ref(null);

// Chart options
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
});
const loadTasks = async () => {
  try {
    const response = await fetch("/data/task.json");
    const data = await response.json();

    tasks.value = data.tasks || [];

    updateChartData();
  } catch (error) {
    console.error("Failed to load task data:", error);
  }
};

// Update Chart Data
const updateChartData = () => {
  const statusCount = { Completed: 0, "In Progress": 0, Upcoming: 0 };

  tasks.value.forEach((task) => {
    const status = task.status.trim(); 
    if (statusCount[status] !== undefined) {
      statusCount[status]++;
    }
  });

  chartData.value = {
    labels: ["Completed", "In Progress", "Upcoming"],
    datasets: [
      {
        label: "Tasks",
        data: [
          statusCount.Completed,
          statusCount["In Progress"],
          statusCount.Upcoming,
        ],
        backgroundColor: ["green", "blue", "red"],
      },
    ],
  };
};

onMounted(loadTasks);
</script>

<style scoped>
.chart-container {
  height: 300px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
