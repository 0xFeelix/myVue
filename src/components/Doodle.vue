<template>
    <css-doodle click-to-update class="doodle">
        :doodle{ @grid: 40x1 / 12em; grid-gap: 5px; } @keyframes slide-in { 0% {
        transform: translateY(-100%); } 100% { transform: traslateY(0); } }
        background: @pick(#EFBB35, #dfa612, #FAE042, #EFBB35, #E84279, #dfa612);
        width:100%; height: @rand(10%, 100%); transition: opacity .2s ease-out;
        animation: slide-in .25s ease-out; opacity: @pick(0.05, 0.1, 0.2, 0.3, 0.4);
        :hover{opacity: 1}
    </css-doodle>
</template>

<style scoped>
.doodle {
  position: absolute;
  z-index: 1;
  width: 100%;
}
</style>