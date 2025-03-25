<template>
  <div class="settings-page">
    <h2>Settings</h2>

    <!-- Profile Settings -->
    <div class="section">
      <h3>Profile Settings</h3>
      <div class="form-group">
        <label>Full Name:</label>
        <input v-model="user.name" type="text" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input v-model="user.email" type="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input v-model="user.password" type="password" />
      </div>
      <button @click="updateProfile">Save Changes</button>
    </div>

    <!-- Notification Settings -->
    <div class="section">
      <h3>Notification Settings</h3>
      <label class="toggle-switch">
        <input type="checkbox" v-model="notifications" />
        <span class="slider"></span>
      </label>
      <span>{{ notifications ? "Enabled" : "Disabled" }}</span>
    </div>

    <!-- Theme Settings -->
    <div class="section">
      <h3>Theme Settings</h3>
      <select v-model="theme">
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// User Data
const user = ref({
  name: "Moses Cheboi",
  email: "mos@example.com",
  password: "",
});

const notifications = ref(true);

// Theme Preference
const theme = ref("light");

// Update Profile Function
const updateProfile = () => {
  alert("Profile updated successfully!");
};

// Watch for theme change
watch(theme, (newTheme) => {
  document.body.setAttribute("data-theme", newTheme);
});
</script>

<style scoped>
.settings-page {
  padding: 20px;
  background: #f5f5f7;
  min-height: 100vh;
  color: #10197a;
}

.section {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background: #10197a;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 3.5px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #10197a;
}

input:checked + .slider:before {
  transform: translateX(24px);
}
</style>
