<template>
  <div class="home">
    <h1>Home page</h1>
    <button @click="handleClick()" class="btn btn-warning">Click</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  setup() {
    
    const handleClick = () => {
      console.log("true");
    };

    return { handleClick };
  },
};
</script>


<style>
</style>