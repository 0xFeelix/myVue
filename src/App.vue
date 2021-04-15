<template>
  <Navbar />
  <Doodle />


  <div class="container text-light cat-head">
    <router-view />
  </div>
</template>




<script>
import Navbar from "@/components/Navbar";
import Doodle from "@/components/Doodle";
export default {
  components: { Navbar, Doodle },
};
</script>





