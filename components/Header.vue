<template>
  <nav class="navbar is-fixed-top p-3" style="background: transparent; backdrop-filter: blur(50px);" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item full-height" href="~index.html">
            <!-- <div class="msia"></div> -->
            <img src="~assets/Sentinel360-Logo.png" width="112">
        </a>

        <!-- <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a> -->
    </div>

    <div class="navbar-menu" style="align-items: center;">
        <div class="navbar-end" style="overflow: hidden; height: 46px;">
            <!-- <img src="~assets/MISA.png" width="112"> -->
            <!-- <img src="~assets/Sentinel360-Logo.png" width="112"> -->
            <!-- <a href="#home" class="navbar-item">Home</a> -->
            <vue-tiny-slider v-bind="tinySliderOptions">
              <div class="msia-top"></div>
              <div class="msia-2"></div>
              <div class="msia-1"></div>
            </vue-tiny-slider>
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
  created() {
    this.tinySliderOptions = {
      // container: '.carousel',
      items: 1,
      mouseDrag: true,
      // loop: false,
      axis: "vertical",
      slideBy: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      // autoHeight: true,
      // autoWidth: true,
      nav: false,
      autoplayButtonOutput: false,
      controls: false,
      nonce: true,
      // swipeAngle: 45,
      // controlsContainer: "#customize-controls1",
      // navContainer: "#customize-thumbnails1",
    };
  },
  data() {
    return {
      tinySliderOptions: {},
    };
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
.msia-1 {
    background: url('~assets/MISA-1.png'); width:100px; height:100px;
    background-size: contain;
    background-position-x: 3px;
    width: 185px;
    height: 46px;
}
.msia-2 {
    background: url(/_nuxt/assets/MISA-2.png);
    background-size: contain;
    background-position-y: 5px;
    width: 185px;
    height: 46px;
}
.msia-top {
    background: url(/_nuxt/assets/MISA.png);
    background-size: cover;
    background-position: -14px -15px;
    width: 185px;
    height: 46px;
}
// .nevbar-end {
  .tns-outer{
    .tns-visually-hidden {
      display: none;
      color: #fff;
    }
  }
// }
</style>
