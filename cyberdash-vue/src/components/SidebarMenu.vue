<template>
  <div class="sidebar">
    <div class="logo">CyberDash</div>
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/alerts">Alerts</router-link>
      <router-link to="/reports">Reports</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu'
}
</script>

<style>
.sidebar {
  width: 250px;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.logo {
  font-size: 24px;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu router-link {
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
}

.menu router-link.active {
  font-weight: bold;
}
</style>
