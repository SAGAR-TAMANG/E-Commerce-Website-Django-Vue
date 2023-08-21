<template>
  
  <nav class="navbar navbar-expand-md navbar-dark bg-dark p-3">
      <a class="navbar-brand" href="#">TAMANG INDUSTRIES</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation" @click="showMobileMenu = !showMobileMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Summer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Winter</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <li>
              <router-link to="/cart" class="nav-link card bg-success">
                <span class="icon"><i class="fa fa-shopping-cart"></i>
                  Cart
                </span>
              </router-link>
          </li>
        </ul>
      </div>
    </nav>
  
  <section class="section">
    <router-view/>
  </section>
    <div class="container">
     <button type="button" class="btn btn-success">Success</button>
     <button type="button" class="btn btn-info">Info</button>
     <button type="button" class="btn btn-warning">Warning</button>
  </div>

  <footer class="text-center">
    COPYRIGHT (C) TAMANG INDUSTRIES LTD
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        showMobileMenu : False,
      }
    }
  }
</script>
