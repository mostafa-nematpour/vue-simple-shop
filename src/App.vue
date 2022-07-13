<script>
import { useHomeStore } from "./stores/home";
export default {
  setup() {
    let homeData = useHomeStore();
    homeData.getHomeFromServer();
    return { homeData };
  },
};
</script>

<template>
  <div class="home-loader" v-if="homeData.loading">loading home data</div>
  <div style="min-height: 400px;"><router-view> </router-view></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.home-loader {
  padding-top: 60px;
  background-color: #025db7d2;
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 100;
}
</style>
