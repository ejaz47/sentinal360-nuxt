<template>
  <div
    class="primary-bg pt-6 pb-6 carousel-container margin-top-24"
    id="Offers"
  >
    <div class="is-flex is-flex-direction-row is-justify-content-center">
      <div style="text-align: center; max-width: 900px" class="m-2">
        <h1 class="is-size-1 has-text-primary has-text-weight-bold">
          Choose your Hero Offer
        </h1>
        <p class="is-size-4 has-text-primary">
          Interested in learning more – please select the offer you are most
          interested and provide your contact details – and we will follow up
          with a call within 1 business day
        </p>
      </div>
    </div>
    <div class="container mt-5" style="max-width: 1200px; overflow: hidden">
      <client-only>
      <div class="carousel">
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div v-for="(offer, index) in offers" :key="index">
            <div>
              <p class="is-size-4 has-text-primary">{{ offer.name }}</p>
              <p class="is-size-5 has-text-primary has-text-weight-bold">
                Protection Engagement
              </p>
              <p class="is-size-6 has-text-primary">
                Elevate your organization's security with expert guidance,
                tailored recommendations, and proactive threat detection,
                powered by Microsoft Security tools.
              </p>
              <div class="mt-6">
                <div class="columns is-multiline is-mobile">
                  <template v-for="(item, i) in offer.details">
                    <div
                      class="column is-full-mobile is-half-tablet is-one-third-desktop"
                      :key="i"
                    >
                      <div class="icon-text">
                        <span class="icon has-text-info">
                          <img src="~assets/correct.svg" alt="" />
                        </span>
                        <span class="has-text-weight-bold">
                          {{ item.title }}</span
                        >
                      </div>
                      <p class="block ml-5">
                        {{ item.text }}
                      </p>
                    </div>
                  </template>
                </div>
              </div>
              <a href="#" class="button is-primary mt-6">Buy now</a>
            </div>
          </div>
        </vue-tiny-slider>
        <div id="customize-controls">
          <div v-for="(offer, index) in offers" :key="index"></div>
        </div>
        <div id="customize-thumbnails">
          <b-button
            class="tns-nav"
            rounded
            :outlined="false"
            type="is-white"
            size="is-small"
            v-for="(offer, index) in offers"
            :key="index"
          >
            <b-icon
              icon="circle-small"
              size="is-large"
              type="is-primary"
            />
          </b-button>
        </div>
      </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Carousel",
  props: {},
  created() {
    this.tinySliderOptions = {
        // container: '.carousel',
        items: 1,
        mouseDrag: true,
        // loop: false,
        items: 1,
        slideBy: "page",
        autoplay: false,
        autoHeight: true,
        swipeAngle: 45,
        controlsContainer: "#customize-controls",
        navContainer: "#customize-thumbnails",
      };
  },
  data() {
    return {
      offers: [
        {
          name: "$11K Value",
          details: [
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
          ],
        },
        {
          name: "$110K Value",
          details: [
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
          ],
        },
        {
          name: "$1100K Value",
          details: [
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
          ],
        },
        {
          name: "$1K Value",
          details: [
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
          ],
        },
      ],
      tinySliderOptions: {},
    };
  },
};
</script>

<style lang="scss">

</style>
