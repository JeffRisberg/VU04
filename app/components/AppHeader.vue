<template>
  <header style="background: #eee; height: 50px;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chart">Chart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dataTable">Data Table</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>
