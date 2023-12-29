<template>
  <nav class="navbar is-fixed-top p-3" style="background: transparent; backdrop-filter: blur(50px);" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item full-height" href="~index.html">
            <img src="~assets/Sentinel360-Logo.png" width="112">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
            <a href="#home" class="navbar-item">Home</a>
            <a href="#services" class="navbar-item">Services</a>
            <a href="#Offers" class="navbar-item">Offers</a>
            <a href="#contact" class="navbar-item">Contact</a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
}
</script>

<style lang="scss">
.full-height img {
  max-height: 100%;
}
</style>
