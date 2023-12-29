<template>
  <div class="has-navbar-fixed-top" style="scroll-behavior: smooth; padding-top: 85px">
    <header-nav></header-nav>
    <div class="columns banner" id="home">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column is-two-thirds is-flex is-align-items-center m-4">
        <div class="banner-text">
          <p class="title is-size-1 has-text-primary">
            Unleash the Full Potential of Security with Sentinel 360
          </p>
          <div>
            <p class="is-size-6 has-text-black-bis m-0 member-of">
              Member of Microsoft Intelligent Security Association
            </p>
            <img src="~assets/Microsoft-logo.png" alt="Microsoft logo" />
          </div>
        </div>
      </div>
    </div>
    <div id="services">
      <div class="columns m-4 margin-top-24">
        <div class="column p-6">
          <p class="title is-capitalized is-size-1 has-text-primary">
            Microsoft-specialized cybersecurity service provider
          </p>
          <p class="is-size-4 has-text-primary-dark mb-5">
            At Sentinel360, we are proud to be a Microsoft-specialized
            cybersecurity service provider, certified as both a Microsoft
            Intelligent Security Association
          </p>
          <a class="button is-primary" href="#">Secure now</a>
        </div>
        <div class="column text-center is-hidden-mobile">
          <img src="~assets/endpoint.svg" alt="">
        </div>
      </div>
      <div class="columns m-4 margin-top-24">
        <div class="column text-center">
          <img src="~assets/service-247.svg" alt="">
        </div>
        <div class="column p-6">
          <p class="title is-capitalized is-size-1 has-text-primary">
            Microsoft-specialized cybersecurity service provider
          </p>
          <p class="is-size-4 has-text-primary-dark mb-5">
            At Sentinel360, we are proud to be a Microsoft-specialized
            cybersecurity service provider, certified as both a Microsoft
            Intelligent Security Association
          </p>
          <a class="button is-primary" href="#">Secure now</a>
        </div>
      </div>
      <div class="columns m-4 margin-top-24">
        <div class="column p-6">
          <p class="title is-capitalized is-size-1 has-text-primary">
            Microsoft-specialized cybersecurity service provider
          </p>
          <p class="is-size-4 has-text-primary-dark mb-5">
            At Sentinel360, we are proud to be a Microsoft-specialized
            cybersecurity service provider, certified as both a Microsoft
            Intelligent Security Association
          </p>
          <a class="button is-primary" href="#">Secure now</a>
        </div>
        <div class="column text-center">
          <img src="~assets/software-integration.svg" alt="">
        </div>
      </div>
    </div>
    <Carousel></Carousel>
    <contact-form></contact-form>
    <!-- <include>_carousel-offer.html</include>
    <include>_form.html</include> -->
  </div>
</template>

<script>
import Header from "~/components/Header";
import Carousel from "~/components/Carousel";
import Form from "~/components/Form";
import $ from "jquery";
// import { tns } from 'tiny-slider/src/tiny-slider';

export default {
  name: "IndexPage",
  components: {
    HeaderNav: Header,
    Carousel,
    ContactForm: Form,
  },
  mounted () {
    $(document).ready(function(){
        // const slider = tns({
        //     container: '.carousel',
        //     items: 1,
        //     slideBy: 'page',
        //     autoplay: false,
        //     autoHeight: true,
        //     mouseDrag: true,
        //     controlsContainer: "#customize-controls",
        //     navContainer: "#customize-thumbnails",
        // });
        
        $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });
  }
};
</script>

<style lang="scss" scoped>
    .banner {
        height: 550px;
        background-image: url('~assets/banner1.png');
        background-size: cover;
        .banner-text {
            width: 100%;
        }
        .member-of {
            max-width: 145px;
        }
    }
</style>
