<template>
  <div class="navbar">
    <div class="user-info">
      <img src="@/assets/avatar.png" alt="Avatar" class="avatar" />
      <span>John Doe</span>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
