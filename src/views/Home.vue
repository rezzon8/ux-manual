<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-icon size="42" class="mr-3">mdi-book-open-page-variant</v-icon>
        <h1 class="display-2 font-weight-bold mb-3 mt-3">
          The UX Manual
        </h1>

        <p class="subheading font-weight-regular">
          A reference guide and resouce for the processes <br />
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
          :copy="item.copy"
          :color="item.color"
          :process_steps="$store.getters.getProcessSteps(item.id)"
        />
        <Dialog :dialog="displayDialog"></Dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import UXProcessSection from "@/components/UXProcessSection.vue";
import Dialog from "@/components/Dialog.vue";

export default {
  name: "UX_manual",
  components: {
    UXProcessSection,
    Dialog
  },
  computed: {
    isDataLoaded() {
      return this.$store.state.is_data_loaded;
    },
    displayDialog() {
      return true;
    }
  },
  beforeCreate() {
    this.$store
      .dispatch("GET_DATA")
      .then(() => {
        console.log("asdas");
      })
      .catch(e => {
        console.log(e.message);
      });
  }
};
</script>
