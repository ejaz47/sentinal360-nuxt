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
            <!-- <p class="is-size-6 has-text-black-bis m-0 member-of">
              Member of Microsoft Intelligent Security Association
            </p> -->
            <img src="~assets/MISA.png" style="max-width: 350px; margin-left: -38px; margin-top: -35px;" alt="Microsoft" />
          </div>
        </div>
      </div>
    </div>
    <div class="container .is-fullhd">
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
            24/7 Security Operations Center (SOC)
          </p>
          <p class="is-size-4 has-text-primary-dark mb-5">
            We operate a 24/7 Security Operations Center (SOC), offering vigilant monitoring and rapid response to threats.
          </p>
        </div>
      </div>
      <div class="columns m-4 margin-top-24">
        <div class="column p-6">
          <p class="title is-capitalized is-size-1 has-text-primary">
            Your Trusted Full-Service Cybersecurity Partner
          </p>
          <p class="is-size-4 has-text-primary-dark mb-5">
            Our commitment extends to Governance, Risk & Compliance, Privacy Risk Management, Virtual CISO (vCISO) services, Vulnerability Management.
          </p>
        </div>
        <div class="column text-center">
          <img src="~assets/software-integration.svg" alt="">
        </div>
      </div>
    </div>
    </div>
    <Carousel></Carousel>
    <contact-form></contact-form>
    <page-footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Carousel from "~/components/Carousel";
import Form from "~/components/Form";
import Footer from "~/components/Footer";
import $ from "jquery";
// import { tns } from 'tiny-slider/src/tiny-slider';

export default {
  name: "IndexPage",
  components: {
    HeaderNav: Header,
    Carousel,
    ContactForm: Form,
    PageFooter: Footer,
  },
  mounted () {
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
