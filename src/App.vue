<template>
  <v-app>
    <v-overlay :value="$store.state.is_data_processing">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <!-- <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            The UX Manual
          </v-list-item-title>
          <v-list-item-subtitle>
            A reference manual
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.url">{{ item.title }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar app color="primary" class="elevation-8">
      <v-icon size="26">mdi-book-open-page-variant</v-icon>
      <v-toolbar-title class="ml-3">
        <h2>The UX Manual</h2>
      </v-toolbar-title>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    // drawer: true,
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
    //   { title: "About", icon: "mdi-help-box", url: "/about" }
    // ],
    // right: null
  }),
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
