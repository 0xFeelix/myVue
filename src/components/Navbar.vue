<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg"
        alt="myvue home"
        class="alligator-logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 426.667 426.667"
        style="enable-background: new 0 0 426.667 426.667"
        xml:space="preserve"
        class="ellipsis"
      >
        <g>
          <g>
            <circle cx="42.667" cy="213.333" r="42.667" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="213.333" cy="213.333" r="42.667" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="384" cy="213.333" r="42.667" />
          </g>
        </g>
      </svg>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link home" to="/">Home</router-link>
        <router-link class="nav-link todo" to="/todo">To do</router-link>
        <router-link class="nav-link playground" to="/playground">Playground</router-link> 
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>




<style scoped>
#nav a.router-link-exact-active {
  background: #2a2a24;
}
#nav {
  position: relative;
  background: linear-gradient(to right, #302e24, #28313e) !important;
  padding: 0 20px;
  z-index: 2;
}
#nav a {
  color: #fff;
  font-size: 14px;
  padding: 15px 20px;
}
#nav a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.ellipsis {
  height: 20px;
  fill: #fff;
}
.navbar-dark .navbar-toggler {
  border: none;
}


/* MEDIA QUERIES */
@media screen and (max-width: 991px) {
  #nav a.router-link-exact-active {
    background: rgba(0, 0, 0, 0.1);
  }
  #nav {
    text-align: center;
    padding: 0;
  }
  #nav a {
    padding: 0;
    font-size: 20px;
    margin-bottom: 15px;
  }
  #nav .navbar-brand,
  .navbar-toggler {
    margin: 5px 10px;
  }
  .navbar-brand img {
    width: 45px;
  }
}

@media screen and (min-width: 992px) {
  .navbar-nav {
    margin-left: 70px;
  }
  .navbar-brand img {
    position: absolute;
    top: 5px;
    left: 20px;
    width: 80px;
  }
  .alligator-logo:hover {
    transform: translateY(10px) rotate(-5deg) scale(1.2);
    animation: psychedelic 15s infinite;
  }
  .alligator-logo {
    transition: transform 0.1s cubic-bezier(0, 1.8, 1, 1.8);
    transform: translateY(0.7em);
  }
  #nav .mobile-hidden {
    display: none;
  }
  @keyframes psychedelic {
    0% {
      -webkit-filter: hue-rotate(0deg) saturate(2) invert(0);
    }
    50% {
      -webkit-filter: hue-rotate(360deg) saturate(8) invert(0.25);
    }

    100% {
      -webkit-filter: hue-rotate(0deg) saturate(2) invert(0);
    }
  }
  #nav .home {
    border-bottom: 3px solid #f7df1e;
  }
  #nav .todo {
    border-bottom: 3px solid #41b883;
  }
  #nav .playground {
    border-bottom: 3px solid #dd0031;
  }
}
</style>