<template>
  <v-form @submit.prevent>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      counter="16"
      label="Password"
      maxLength="16"
      required
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      :type="showPassword ? 'text' : 'password'"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="confirmPassword"
      :error-messages="confirmPasswordErrors"
      label="Confirm password"
      required
      :type="showPassword ? 'text' : 'password'"
      @input="$v.confirmPassword.$touch()"
      @blur="$v.confirmPassword.$touch()"
    ></v-text-field>

    <v-btn
      :disabled="isFormSubmitReady"
      class="mr-4"
      type="submit"
      @click.native="signUp"
      :loading="$store.state.is_data_processing"
    >
      Signup
    </v-btn>
    <v-btn text @click.native="clearForm" class="clear-form">
      clear
    </v-btn>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { mapActions } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "SignUpForm",

  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { sameAsPassword: sameAs("password") }
  },

  data: () => ({
    email: "",
    password: "",
    confirmPassword: "",
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
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 characters long.");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("Passwords do not match");
      return errors;
    },
    isFormSubmitReady() {
      return this.$v.$invalid;
    }
  },

  methods: {
    ...mapActions(["SIGN_UP"]),
    signUp() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const payload = {
          email: this.email,
          password: this.password
        };
        this.$emit("signup", payload);
      }
    },
    clearForm() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.showPassword = false;
    }
  }
};
</script>

<style></style>
