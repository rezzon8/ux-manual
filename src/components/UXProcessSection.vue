<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in $store.getters.getUXProcesses"
        :key="item.id"
        :href="item.href"
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold">
          {{ item.title }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UXProcessSection",

  props: {
    msg: String
  },

  data: () => ({}),
  computed: {
    isDataLoaded() {
      return this.$store.state.is_data_loaded;
    }
  },
  beforeCreate() {
    this.$store
      .dispatch("GET_DATA")
      .then(() => {
        console.log("asdas");
      })
      .catch(e => {
        console.log(e.message, "oopp");
      });
  }
};
</script>
