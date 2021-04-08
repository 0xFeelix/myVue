<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/blog">Blog</router-link>

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
  color: #42b983 !important;
}
#nav {
  background: #304457 !important;
  border-radius: 5px;
}
.collapse {
  display: flex;
  justify-content: flex-end;
}
#nav .dropdown-menu {
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
}
#nav .dropdown-menu a {
  color: #709bab;
  margin-bottom: 2px;
  border: 1px dotted #1d2935;
  border-radius: 5px;
  background: #304457;
}
#nav .dropdown-menu a:hover {
  background: #304457;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .collapse {
    justify-content: flex-start;
  }
  #nav .dropdown-menu a {
    background: #1d2935;
  }
}
</style>