<template>
  <v-app>
    <v-overlay :value="$store.state.is_data_processing">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-app-bar app color="primary" class="elevation-8">
      <v-icon size="26">mdi-book-open-page-variant</v-icon>
      <v-toolbar-title class="ml-3">
        <h2>The UX Manual</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="!userIsAuthenticated">
        <v-btn text @click.stop="loginDialog = true">
          Login
        </v-btn>

        <v-btn text @click.stop="signUpDialog = true">
          Signup
        </v-btn>
      </template>
      <template v-else>
        <v-btn text @click.stop="logOut">
          Logout
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-dialog v-model="loginDialog" width="800">
      <v-card>
        <v-card-title class="headline" style="position:relative;">
          Login
        </v-card-title>
        <v-card-text class="pt-5">
          <LoginForm @login="logIn" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.stop="loginDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="signUpDialog" width="800">
      <v-card>
        <v-card-title class="headline" style="position:relative;">
          Signup
        </v-card-title>
        <v-card-text class="pt-5">
          <SignUpForm @signup="signUp" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.stop="signUpDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LoginForm from "@/components/forms/LoginForm.vue";
import SignUpForm from "@/components/forms/SignUpForm.vue";

export default {
  name: "UX_manual",
  components: {
    SignUpForm,
    LoginForm
  },
  data() {
    return {
      color: "blue",
      loginDialog: false,
      signUpDialog: false
    };
  },
  computed: {
    ...mapGetters(["getDialogState", "userIsAuthenticated"])
  },
  methods: {
    ...mapActions(["LOGIN"]),
    signUp(payload) {
      // signup
      this.$store
        .dispatch("SIGN_UP", payload)
        .then(() => {
          this.signUpDialog = false;
        })
        .catch(e => {
          console.log(e, "error in sign up");
        });
    },
    logIn(payload) {
      // login
      this.$store
        .dispatch("LOGIN", payload)
        .then(() => {
          this.loginDialog = false;
        })
        .catch(e => {
          console.log(e, "error in login");
        });
    },
    logOut() {
      this.$store
        .dispatch("LOGOUT")
        .then(() => {
          // logged out
        })
        .catch(e => {
          console.log(e, "error in logout");
        });
    }
  },
  beforeCreate() {
    this.$store
      .dispatch("GET_DATA")
      .then(() => {
        // data retrieved
      })
      .catch(e => {
        console.log(e.message);
      });
  }
};
</script>

<style lang="scss" scoped>
.v-card__text {
  padding-top: 20px !important;
}
</style>
