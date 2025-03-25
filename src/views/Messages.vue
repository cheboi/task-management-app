<template>
    <div class="messages-page">
      <!-- Left Section: Users List -->
      <div class="users-list">
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="Search users..." />
        </div>
        <div class="users">
          <div
            v-for="user in filteredUsers"
            :key="user.id"
            class="user-card"
            @click="selectUser(user)"
          >
            <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
            <div class="user-info">
              <h3>{{ user.name }}</h3>
              <p :class="{ online: user.online, offline: !user.online }">
                {{ user.online ? "Online" : "Offline" }}
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right Section: Chat Area -->
      <div class="chat-area">
        <div v-if="selectedUser" class="chat-header">
          <h3>{{ selectedUser.name }}</h3>
        </div>
        <div v-if="selectedUser" class="chat-messages">
          <div
            v-for="message in messages"
            :key="message.id"
            class="message"
            :class="{ 'sent': message.sender === 'me', 'received': message.sender !== 'me' }"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
        <div v-if="selectedUser" class="chat-input">
          <input v-model="newMessage" type="text" placeholder="Type a message..." @keyup.enter="sendMessage" />
          <button @click="sendMessage">Send</button>
        </div>
        <div v-else class="no-chat">
          <p>Select a user to start chatting</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  // Dummy Users Data
  const users = ref([
    { id: 1, name: "Alice Kamau", online: true, avatar: new URL("../assets/avatar.png", import.meta.url).href },
    { id: 2, name: "Bob Mark", online: false, avatar: new URL("../assets/avatar.png", import.meta.url).href },
    { id: 3, name: "Charlie Kiptoo", online: true, avatar: new URL("../assets/avatar.png", import.meta.url).href },
  ]);
  
  const selectedUser = ref(null);
  const searchQuery = ref("");
  const newMessage = ref("");
  
  // Dummy Chat Messages
  const messages = ref([
    { id: 1, sender: "me", text: "Hey! How are you?" },
    { id: 2, sender: "Alice Kamau", text: "I'm doing great! How about you?" },
  ]);
  
  const filteredUsers = computed(() => {
    return users.value.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const selectUser = (user) => {
    selectedUser.value = user;
    messages.value = [
      { id: 1, sender: "me", text: "Hey! How are you?" },
      { id: 2, sender: user.name, text: "I'm doing great! How about you?" },
    ];
  };
  
  const sendMessage = () => {
    if (newMessage.value.trim() === "") return;
    messages.value.push({ id: messages.value.length + 1, sender: "me", text: newMessage.value });
    newMessage.value = "";
  };
  </script>
  
  <style scoped>
  .messages-page {
    display: flex;
    height: 100vh;
    background: #f5f5f7;
  }
  
  .users-list {
    width: 30%;
    background: white;
    padding: 15px;
    border-right: 1px solid #ddd;
    overflow-y: auto;
  }
  
  .search-bar {
    margin-bottom: 10px;
  }
  
  .search-bar input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .users {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .user-card {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .user-card:hover {
    background: #eaeaea;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-info h3 {
    margin: 0;
  }
  
  .online {
    color: green;
  }
  
  .offline {
    color: gray;
  }
  
  .chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 15px;
    position: relative;
  }
  
  .chat-header {
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .message {
    max-width: 70%;
    padding: 8px 12px;
    border-radius: 10px;
  }
  
  .sent {
    align-self: flex-end;
    background: #10197a;
    color: white;
  }
  
  .received {
    align-self: flex-start;
    background: #f0f0f0;
    color: black;
  }
  
  .chat-input {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 10px;
  }
  
  .chat-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .chat-input button {
    background: #10197a;
    color: white;
    border: none;
    padding: 8px 15px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .no-chat {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: gray;
  }
  </style>
  