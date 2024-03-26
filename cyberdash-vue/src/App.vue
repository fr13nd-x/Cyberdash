<template>
  <div id="app">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script>
import Sidebar from './components/SidebarMenu.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }
}
</style>
