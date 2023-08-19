<template>
  <div>
    <div class="p-10">
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand" href="">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <router-view/>
  </div>
  <footer>
    This is a footer 
  </footer>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
</style>
