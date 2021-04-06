<template>
  <div class="container text-light">
    <Navbar />
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
body {
  background: #1d2935 !important;
  padding: 20px;
}
</style>
