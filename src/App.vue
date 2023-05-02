<template>
  <div>
    <login-component></login-component>
    <dashboard-component></dashboard-component>
  </div>
</template>

<script>
import DashboardComponent from "./components/DashboardComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

export default {
  name: "App",
  components: {
    LoginComponent,
    DashboardComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helveticaa, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
