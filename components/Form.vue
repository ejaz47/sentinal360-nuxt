<template>
  <div class="pt-6 pb-6 mb-6 margin-top-24">
    <div class="is-flex is-flex-direction-row is-justify-content-center">
      <div style="text-align: center; max-width: 900px" class="m-2">
        <h1
          class="is-size-1 has-text-primary has-text-weight-bold"
          id="contact"
        >
          Contact us
        </h1>
        <p class="is-size-4 has-text-primary">
          Get in touch with us effortlessly. Simply complete the form, and we'll
          be in contact with you at the earliest convenience.
        </p>
      </div>
    </div>
    <div class="container mt-5 box" style="max-width: 800px">
      <b-field grouped>
        <b-field label="Name" expanded
          :type="{ 'is-danger': formData.name.error.length }"
          :message="formData.name.error || ''">
            <b-input v-model="formData.name.value"></b-input>
        </b-field>
        <b-field label="Title" expanded
          :type="{ 'is-danger': formData.title.error.length }"
          :message="formData.title.error || ''">
            <b-input v-model="formData.title.value"></b-input>
        </b-field>
      </b-field>  
      <b-field
        label="Email"
        :type="{ 'is-danger': formData.email.error.length }"
        :message="formData.email.error || ''">
          <b-input type="email" v-model="formData.email.value">
          </b-input>
      </b-field>
      <b-field label="Company"
        :type="{ 'is-danger': formData.company.error.length }"
        :message="formData.company.error || ''">
          <b-input v-model="formData.company.value"></b-input>
      </b-field>
      <div class="field mt-6 mb-3">
        <div class="control">
          <b-button type="is-primary" :loading="loading" :disabled="loading" @click="onSendClick">Send</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {},
  data () {
    return {
      loading: false,
      hasError: false,
      formData: {
        name: {
          value: "",
          error: [],
          validate: {
            required: true,
            maxLength: 100
          }
        },
        title: {
          value: "",
          error: [],
          validate: {
            required: true,
            maxLength: 50
          }
        },
        email: {
          value: "",
          error: [],
          validate: {
            required: true,
            maxLength: 100,
            email: true
          }
        },
        company: {
          value: "",
          error: [],
          validate: {
            required: true,
            maxLength: 100
          }
        },
      }
    }
  },
  methods: {
    onSendClick () {
      this.validate();
      if (!this.hasError) {
        const payload = {};
        Object.keys(this.formData).forEach(key => {
          payload[key] = this.formData[key].value;
        });
        this.postData(payload);
        console.log(payload);
      }
    },
    clearForm () {
      this.hasError = false;
      this.loading = false;
      for (const key in this.formData) {
        const field = this.formData[key];
        field.value = "";
        field.error = [];
      }
    },
    async postData(payload) {
      try {
        this.loading = true;
        // Make the POST request
        const response = await this.$axios.post("/insertData", payload);

        this.loading = false;
        // Handle the response
        // console.log('Response:', response.data);
        this.$buefy.dialog.alert({
          title: 'Thank You!',
          message: "We've received your details and are on it! Expect to hear from us soon.",
          confirmText: 'ok'
        });
        this.clearForm();
      } catch (error) {
        // Handle errors
        this.$buefy.notification.open({
          duration: 5000,
          message: `Something went wrong!`,
          position: 'is-bottom-right',
          type: 'is-danger',
          hasIcon: true
        });
        // setTimeout(() => {
          this.loading = false
        // }, 2000);
      }
    },
    validate() {
      this.hasError = false;
      for (const key in this.formData) {
        const field = this.formData[key];
        field.error = [];

        if (field.validate.required && !field.value.trim()) {
          field.error.push("This field is required.");
        }

        if (
          field.validate.maxLength &&
          field.value.length > field.validate.maxLength
        ) {
          field.error.push(
            `Maximum length is ${field.validate.maxLength} characters.`
          );
        }

        if (
          field.validate.email &&
          !/^\S+@\S+\.\S+$/.test(field.value)
        ) {
          field.error.push("Invalid email address.");
        }

        this.hasError = this.hasError || field.error.length ? true : false
      }
    }
  }
};
</script>

<style lang="scss">
</style>
