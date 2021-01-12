<template>
  <v-form @submit.prevent>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Email"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      counter="16"
      label="Password"
      required
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      :type="showPassword ? 'text' : 'password'"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn
      :disabled="isFormSubmitReady"
      class="mr-4 "
      type="submit"
      @click.native="logIn"
      :loading="$store.state.is_data_processing"
    >
      Login
    </v-btn>
    <v-btn text @click.native="clearForm" class="clear-form">
      clear
    </v-btn>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",

  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required }
  },

  data: () => ({
    email: "",
    password: "",
    showPassword: false
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail.");
      !this.$v.email.required && errors.push("E-mail is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    isFormSubmitReady() {
      return this.$v.$invalid;
    }
  },

  methods: {
    logIn() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const payload = {
          email: this.email,
          password: this.password
        };
        this.$emit("login", payload);
      }
    },
    clearForm() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.showPassword = false;
    }
  }
};
</script>

<style></style>
