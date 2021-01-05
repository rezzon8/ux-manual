<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-icon size="42" class="mr-3">mdi-book-open-page-variant</v-icon>
        <h1 class="display-2 font-weight-bold mb-3 mt-3">
          The UX Manual
        </h1>

        <p class="subheading font-weight-regular">
          A reference guide and resource for the processes <br />
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
        <Dialog :dialog="get_dialog_state" @closeDialog="closeDialog" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import UXProcessSection from "@/components/UXProcessSection.vue";
import Dialog from "@/components/Dialog.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "UX_manual",
  components: {
    UXProcessSection,
    Dialog
  },
  computed: {
    ...mapGetters(["get_dialog_state"])
  },
  methods: {
    ...mapMutations(["SET_DIALOG_STATE"]),
    closeDialog() {
      this.SET_DIALOG_STATE(false);
    },
    displayDialog() {
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
