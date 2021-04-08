<template>
  <Navbar />
  <div class="container text-light">
    <router-view />
  </div>
</template>




<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
};
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
body {
  font-family:  'New Tegomin' !important;
  background: #21272F !important;
}
</style>
