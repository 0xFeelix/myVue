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

<style>
  /* Importing fonts */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

/* Some variables */
:root{
  --mainBG: #191C23;
}

/* Global styles */
body {
  font-family: "Ubuntu Mono" !important;
  background: #21272f !important;
}

.container-fluid{
  padding: 0 !important;
}

.cat-head {
  margin-top: 25vh !important;
}
</style>



