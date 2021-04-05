<template>

  <div id="app">

    <div class="container text-light">
      <Navbar />
    <router-view/>
    </div>

  </div>

  
</template>




<script>
import Navbar from '@/components/Navbar'

  export default {
    components: {Navbar}
  }
</script>




<style>
body{
  background: #26262D !important;
  height: 100vh !important;
  border: 1px solid #28A745 !important
}
.container{
  margin-top: 20px;
}
</style>
