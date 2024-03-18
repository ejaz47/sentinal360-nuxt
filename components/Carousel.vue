<template>
  <div
    class="primary-bg pt-6 pb-6 carousel-container margin-top-24"
    id="Offers"
  >
    <div class="is-flex is-flex-direction-row is-justify-content-center">
      <div style="text-align: center; max-width: 900px" class="m-2">
        <h1 class="is-size-1 has-text-primary has-text-weight-bold">
          Fortify Your Defense
        </h1>
        <p class="is-size-4 has-text-primary">
          Embark on a <img src="~assets/Microsoft-logo.png" style="margin-bottom: -7px" width="112"> Funded Security Journey for Robust Protection
        </p>
      </div>
    </div>
    <div class="container mt-5" style="max-width: 1200px; overflow: hidden">
      <client-only>
        <div class="carousel">
          <div id="customize-thumbnails">
            <b-button
              class="tns-nav"
              rounded
              type="is-white"
              size="is-small"
              icon-left="security"
              v-for="(offer, index) in offers"
              :key="index"
            >
              <!-- <b-icon icon="circle-small" size="is-large" type="is-primary" /> -->
              {{offer.title}}
            </b-button>
          </div>
          <vue-tiny-slider v-bind="tinySliderOptions">
            <div v-for="(offer, index) in offers" :key="index">
              <div>
                <!-- <p class="is-size-4 has-text-primary">{{ offer.title }}</p> -->
                <p class="is-size-5 has-text-primary has-text-weight-bold">
                  <span>{{ offer.name }}</span>
                </p>
                <p class="is-size-6 has-text-primary">
                  {{ offer.description }}
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
                <div class="buttons mt-6">
                <b-button type="is-success"
                        icon-left="check-bold" @click="onGetNow()">
                        Get now
                </b-button>
                <b-button type="is-primary"
                        tag="a"
                        :href="'./pdf/' + offer.pdf"
                        download
                        @click="onPdfDownload(offer)"
                        icon-left="download">
                        Download PDF
                </b-button>
                </div>
              </div>
            </div>
          </vue-tiny-slider>
          <div id="customize-controls">
            <div v-for="(offer, index) in offers" :key="index"></div>
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
          title: "Threat Protection",
          name: "Threat Protection Engagement",
          pdf: "Threat Protection Engagement.pdf",
          description:
            "Elevate your organization's security with expert guidance, tailored recommendations, and proactive threat detection, powered by Microsoft Security tools.",
          details: [
            {
              title: "Phishing Attack Awareness",
              text: "Gauge your organization's exposure to phishing attacks.",
            },
            {
              title: "Customized Security Strategy",
              text: "Develop a tailored security plan based on Microsoft expert recommendations.",
            },
            {
              title: "Strategic Documentation",
              text: "Create a documented security strategy for stakeholders.",
            },
            {
              title: "Password Protocol Evaluation",
              text: "Assess if employees are following secure password practices.",
            },
            {
              title: "Immediate Threat Detection",
              text: "Discover real-time threats in email, identity, and data.",
            },
            {
              title: "Leverage Microsoft Security Tools",
              text: "Learn to maximize the latest tools for enhanced security.",
            },
            {
              title: "Data Exposure Examination",
              text: "Identify potential personal data exposure.",
            },
            {
              title: "Actionable Steps",
              text: "Receive specific next steps for addressing vulnerabilities.",
            },
          ],
        },
        {
          title: "Data Security",
          name: "Data Security Engagement",
          pdf: "Data Security Overview.pdf",
          description:
            "Address data security, privacy, and compliance risks with a comprehensive assessment, insights into internal and external threats, and actionable recommendations for mitigation.",
          details: [
            {
              title: "Understand the risks of Dark Organizational Data",
              text: "",
            },
            {
              title: "Learn about the risks organizational insiders may impose",
              text: "",
            },
            {
              title:
                "Assess your environment against key data protection standards",
              text: "",
            },
            {
              title:
                "Receive an analysis and report on findings and associated risks",
              text: "",
            },
            {
              title:
                "Learn about tools and services that can help mitigate risks",
              text: "",
            },
            {
              title: "Explore recommendations and next steps",
              text: "",
            },
          ],
        },
        {
          title: "Microsoft Sentinel",
          name: "Microsoft Sentinel Engagement",
          pdf: "Microsoft Sentinel Engagement.pdf",
          description:
            "Harness the power of Microsoft Sentinel, a cloud-native SIEM, to detect and prevent threats, and benefit from insights into active threats in your environment.",
          details: [
            {
              title:
                "Understand the features and benefits  of Microsoft Sentinel",
              text: "",
            },
            {
              title:
                "Gain visibility into threats across email, identity, and data",
              text: "",
            },
            {
              title:
                "Better understand, prioritize, and mitigate potential threat vectors",
              text: "",
            },
            {
              title:
                "Create a defined deployment roadmap based on your environment and goals",
              text: "",
            },
            {
              title: "Develop joint plans and next steps",
              text: "",
            },
          ],
        },
        {
          title: "Cybersecurity",
          name: "Cybersecurity Assessment",
          pdf: "Cybersecurity Assessment.pdf",
          description:
            "Gain insights into and mitigate prevalent threats like ransomware and insider risks, aligning your security with industry benchmarks, with guidance from Microsoft experts.",
          details: [
            {
              title: "Customized Security Plan",
              text: "Develop a strategic security plan tailored to your organization with guidance from Microsoft experts.",
            },
            {
              title: "Benchmark Alignment",
              text: "Gain awareness of your current security status compared to industry standards.",
            },
            {
              title: "Vulnerability Remediation",
              text: "Receive support for addressing vulnerabilities and strengthening long-term security.",
            },
            {
              title: "Security Importance",
              text: "Understand the significance of cybersecurity and compliance with industry regulations.",
            },
            {
              title: "Proactive Protection",
              text: "Learn how to safeguard your organization from potential threats.",
            }
          ],
        },
      ],
      tinySliderOptions: {},
    };
  },
  methods: {
    onPdfDownload (offer) {
      this.$buefy.notification.open({
        message: `Download <b>${offer.pdf}</b> is successful.`,
        type: 'is-success'
      });
    },
    onGetNow () {
      const target = $("#contact");
      $('html,body').animate({
          scrollTop: target.offset().top - 100
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
</style>
