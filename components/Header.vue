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
import $ from "jquery";

export default {
  name: 'Header',
  props: {
  },
  methods: {
    toggleNavMenu (el) {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
  },
  mounted () {
    const self = this;
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            self.toggleNavMenu(el);
        });
    });

    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top - 100
              }, 1000);
              // Add a click event on each of them
              $navbarBurgers.forEach(el => {
                self.toggleNavMenu(el);
              });
              return false;
          }
      }
    });
  }
}
</script>

<style lang="scss">
.full-height img {
  max-height: 100%;
}
</style>
