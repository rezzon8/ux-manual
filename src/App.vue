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
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    loadData() {
      this.$store
        .dispatch("GET_DATA")
        .then(() => {
          console.log("asdas");
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  }
};
</script>

<style>
.v-card__text {
  padding-top: 10px !important;
}
</style>
