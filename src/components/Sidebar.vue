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
    <div class="user-profile">
      <img src="@/assets/avatar.png" alt="Avatar" class="avatar" />
      <span>John Doe</span>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #10197A;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 0;
  display: block;
}

nav a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
