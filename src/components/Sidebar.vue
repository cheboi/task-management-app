<template>
  <div class="sidebar">
    <div class="logo">🚀 TMS</div>
    <nav>
      <router-link to="/">Overview</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/mentors">Mentors</router-link>
      <router-link to="/messages">Messages</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #10197a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}
nav {
  display: flex;
  flex-direction: column;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 0;
  display: block;
  margin-top: 20;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
