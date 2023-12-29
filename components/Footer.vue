<template>
  <footer class="footer">
    <div class="container">
      <!-- <div class="content">
                <p>Made with <b-icon icon="favorite" type="is-danger"></b-icon> by <a href="https://twitter.com/rafaelpimpa" target="_blank">Rafael Beraldo</a>.</p>
                <p>
                    <small>
                        The source code is licensed under <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>.
                        <br>
                        The website content is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC ANS 4.0</a>.
                    </small>
                </p>

                <b-field>
                    <p class="control">
                        <a class="button" href="https://github.com/rafaelpimpa/buefy" target="_blank">
                            <b-icon pack="fa" icon="github"></b-icon> <span>GitHub</span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-twitter" href="https://twitter.com/rafaelpimpa" target="_blank">
                            <b-icon pack="fa" icon="twitter"></b-icon> <span>Twitter</span>
                        </a>
                    </p>
                </b-field>
            </div> -->
      <div class="columns has-text-white">
        <div class="column is-4">
          <div style="filter: invert(1); margin-left: -5px" class="mb-4">
            <img
              src="~assets/Sentinel360-Logo.png"
              width="112"
              style="filter: brightness(0) grayscale(25)"
            />
          </div>
          <p>
            Keep your organization safe from cyber attacks with our proven and
            effective breach prevention strategies.
          </p>
          <div class="subs-content mt-5">
            <form class="subscription">
              <input class="add-email" type="email" placeholder="subscribe@me.now">
              <button class="submit-email" type="button">
                <span class="before-submit">Subscribe</span>
                <span class="after-submit">Thank you for subscribing!</span>
              </button>
            </form>
          </div>
        </div>
        <div class="column" style="text-align:right;">
          <div class="columns">
            <div class="column is-6">
              <p class="is-size-5">Costa Mesa, CA (Corporate)</p>
              <b-button
                class="has-text-link-light pb-1"
                type="is-ghost"
                tag="a"
                icon-left="email"
                href="mailto:[info@sentinel360.io]">
                info@sentinel360.io
              </b-button>
              <b-button
                class="has-text-link-light pb-1"
                type="is-ghost"
                tag="a"
                icon-left="phone"
                href="tel:[+(949) 284-7254]">
                +(949) 284-7254
              </b-button>
            </div>
            <div class="column is-6">
              <p class="is-size-5">Costa Mesa, CA (Corporate)</p>
              <b-button
                class="has-text-link-light pb-1"
                type="is-ghost"
                tag="a"
                icon-left="email"
                href="mailto:[info@sentinel360.io]">
                info@sentinel360.io
              </b-button>
              <b-button
                class="has-text-link-light pb-1"
                type="is-ghost"
                tag="a"
                icon-left="phone"
                href="tel:[+(949) 284-7254]">
                +(949) 284-7254
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-white" style="text-align:center">
        <small>© 2023 SENTINEL360, INC.</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style lang="scss">
.footer {
  background: #1a3549;
  .subscription {
  position: relative;
  width: 100%;
  height: 100%;
}

.subs-content {
  width: 360px;
  height: 40px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
  border-radius: 60px;
  overflow: hidden;
}

.subscription .add-email{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 20px;
}

.subscription .submit-email {
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - 2px);
  width: 100px;
  border: none;
  border-radius: 60px;
  outline: none;
  margin: 1px;
  padding: 0 20px;
  cursor: pointer;
  background: #4ABEBB;
  color: #FFFFFF;
  transition: width .35s ease-in-out,
    background .35s ease-in-out;
}

.subscription.done .submit-email {
  width: calc(100% - 2px);
  background: #C0E02E;
}

.subscription .submit-email .before-submit,
.subscription .submit-email .after-submit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 38px;
  transition: visibility .35s ease-in-out,
    opacity .35s ease-in-out;
}

.subscription.done .submit-email .before-submit,
.subscription:not(.done) .submit-email .after-submit {
  visibility: hidden;
  opacity: 0;
}

.subscription .submit-email .after-submit {
  transition-delay: .35s;
}

.subscription:not(.done) .submit-email .before-submit,
.subscription.done .submit-email .after-submit {
  visibility: visible;
  opacity: 1;
}
}
</style>