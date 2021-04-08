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
        <router-link class="nav-link about" to="/about">About</router-link>
        <router-link class="nav-link blog" to="/blog">Blog</router-link>
        <router-link class="dropdown-item mobile-hidden" to="/todoapp"
          >Todo app</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null1"
          >Resources</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null2"
          >Node.js</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null3"
          >Svelte</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null4"
          >Ionic</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null5"
          >Polymer</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null6"
          >Flow</router-link
        >
        <router-link class="dropdown-item mobile-hidden" to="/null7"
          >Electron</router-link
        >
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Works</a
          >
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/todoapp"
              >Todo app</router-link
            >
            <router-link class="dropdown-item" to="/null1"
              >Resources</router-link
            >
            <router-link class="dropdown-item" to="/null2">Node.js</router-link>
            <router-link class="dropdown-item" to="/null3">Svelte</router-link>
            <router-link class="dropdown-item" to="/null4">Ionic</router-link>
            <router-link class="dropdown-item" to="/null5">Polymer</router-link>
            <router-link class="dropdown-item" to="/null6">Flow</router-link>
            <router-link class="dropdown-item" to="/null7"
              >Electron</router-link
            >
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>




<style>
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

#nav .dropdown-menu {
  background: linear-gradient(to right, #302e24, #28313e);
  padding: 0;
}
#nav .dropdown-menu a {
  padding: 10px 15px;
}
#nav .dropdown-menu a:hover {
  background: #2a2a24;
}

/* MEDIA QUERIES */
@media screen and (max-width: 991px) {
  #nav a.router-link-exact-active {
    background: rgba(0, 0, 0, 0.1);
  }
  #nav .dropdown {
    display: none;
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
  #nav .about {
    border-bottom: 3px solid #41b883;
  }
  #nav .blog {
    border-bottom: 3px solid #dd0031;
  }
}
</style>