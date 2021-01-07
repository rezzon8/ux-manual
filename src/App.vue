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

      <v-btn text @click.stop="loginDialog = true">
        Login
      </v-btn>

      <v-btn text @click.stop="signUpDialog = true">
        Signup
      </v-btn>

      <v-btn text>
        Logout
      </v-btn>
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
          <LoginForm />
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
          <SignUpForm />
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
import { mapMutations, mapGetters } from "vuex";
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
    ...mapGetters(["get_dialog_state"])
  },
  methods: {
    ...mapMutations(["SET_DIALOG_STATE"]),
    closeDialog() {
      this.SET_DIALOG_STATE(false);
    },
    openDialog() {
      this.SET_DIALOG_STATE(true);
    }
  },
  beforeCreate() {
    this.$store
      .dispatch("GET_DATA")
      .then(() => {
        // console.log("data loaded");
      })
      .catch(e => {
        console.log(e.message);
      });
  }
};
</script>

<style>
.v-card__text {
  padding-top: 10px !important;
}
</style>
