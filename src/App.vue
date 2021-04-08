<template>
  <Navbar />
  <css-doodle click-to-update class="lol">
    :doodle{ @grid: 40x1 / 12em; grid-gap: 5px; } @keyframes slide-in { 0% {
    transform: translateY(-100%); } 100% { transform: traslateY(0); } }
    background: @pick(#EFBB35, #dfa612, #FAE042, #EFBB35, #E84279, #dfa612);
    width:100%; height: @rand(10%, 100%); transition: opacity .2s ease-out;
    animation: slide-in .25s ease-out; opacity: @pick(0.05, 0.1, 0.2, 0.3, 0.4);
    :hover{opacity: 1}
  </css-doodle>

  <div class="container text-light main-content">
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
@import url("https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap");

:root{
  --mainBG: #191C23;
}

body {
  font-family: "New Tegomin" !important;
  background: #21272f !important;
}
.lol {
  position: absolute;
  z-index: 1;
  width: 100%;
}
.main-content {
  margin-top: 25vh;
}
</style>
