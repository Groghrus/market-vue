<template>
<v-app id="app">
  <Navbar/>
  <v-main>
   <keep-alive> <router-view/> </keep-alive>
  </v-main>
  <Footer/>
</v-app>
</template>

<script>
import Navbar from "./components/app/Navbar";
import Footer from "./components/app/Footer";
export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
};
</script>
<style lang="scss">
  #app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  }
</style>
