<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          The UX Manual
        </h1>

        <p class="subheading font-weight-regular">
          A reference and resouce for the processes <br />
          of which UX strategy is comprised
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <UXProcessSection
          v-for="item in $store.getters.getUXProcesses"
          :key="item.id"
          :title="item.title"
          :process_steps="$store.getters.getProcessSteps(item.id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import UXProcessSection from "@/components/UXProcessSection.vue";

export default {
  name: "UX_manual",
  components: {
    UXProcessSection
  },
  methods: {},
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
