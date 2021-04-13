<template>
  <div class="Resources">
    <!-- Page title changer -->
    <h1>{{ pagetitle }}</h1>
    <button @click="changeTitle()" class="btn btn-warning">Change title</button>
    <button @click="defaultTitle()" class="btn btn-primary">
      Default title
    </button>
    <hr />
    <!-- Increase & Decrease -->
    <h5>increase decrease:</h5>
    <span class="ml-1">{{ age }}</span>
    <p>
      <button @click="age++" class="btn btn-success">+</button>
      <button @click="age--" class="btn btn-danger">-</button>
    </p>
    <hr />
    <!-- Mousemove offset X&Y -->
    <h5>Mousemove offsets:</h5>
    <div @mousemove="mouseTest($event)" class="block">
      <span>x: {{ x }}</span>
      <span>y: {{ y }}</span>
    </div>
    <hr />
    <!-- Book generator JSON -->
    <h5>Generated books:</h5>
    <ul class="books row">
      <li
        v-for="book in books"
        :key="book.id"
        class="col-sm-6 col-md-4 col-lg-3 mb-4"
      >
        <div class="card text-white bg-dark h-100" style="max-width: 18rem">
          <div class="card-header">{{ book.title }}</div>
          <img
            :src="book.image"
            class="img-fluid card-img-top"
            :alt="book.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ book.author }}</h5>
            <p class="card-text">
              {{ book.text }}
            </p>
          </div>

          <div class="card-footer d-flex justify-content-between">
            <small class="text-muted"
              >Book year:
              <span class="badge badge-primary">{{ book.year }}</span></small
            >

            <small>
              <a :href="book.link" target="_blank" class="badge badge-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-link"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  ></path>
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  ></path>
                </svg>
              </a>
            </small>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pagetitle: "PlayGround",
      defTitle: "PlayGround",
      age: "0",
      x: 0,
      y: 0,
      books: [
        {
          title: "Things Fall Apart",
          author: "Chinua Achebe",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card",
          year: "1958",
          image: require("../assets/images/things-fall-apart.jpg"),
          link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        },
        {
          title: "Fairy tales",
          author: "Hans Christian",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card",
          year: "1835",
          image: require("../assets/images/fairy-tales.jpg"),
          link:
            "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection",
        },
        {
          title: "The Divine Comedy",
          author: "Dante Alighieri",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card",
          year: "1315",
          image: require("../assets/images/the-divine-comedy.jpg"),
          link: "https://en.wikipedia.org/wiki/Divine_Comedy",
        },
        {
          title: "The Unnamable",
          author: "Samuel Beckett",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card",
          year: "1951",
          image: require("../assets/images/molloy-malone-dies-the-unnamable.jpg"),
          link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
        },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.pagetitle = "My page";
    },
    defaultTitle() {
      this.pagetitle = this.defTitle;
    },
    mouseTest(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
};
</script>



<style>
.btn {
  margin: 0 5px;
}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  background: var(--danger);
  border-radius: 5px;
}
.block::before {
  content: "move me";
  color: black;
  position: absolute;
  top: 0;
  opacity: 0.4;
  font-size: 30px;
}
.block::after {
  content: "X|offset|Y";
  color: black;
  position: absolute;
  bottom: 0;
  opacity: 0.4;
  font-size: 20px;
}

ul {
  padding: 0;
}

.card-img-top {
  height: 40vh;
  object-fit: cover;
}

* {
  list-style: none;
}
</style>