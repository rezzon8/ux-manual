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
          @openDialog="openDialog"
          :process_steps="$store.getters.getProcessSteps(item.id)"
        />
        <Dialog
          :dialog="get_dialog_state"
          :color="color"
          :title="dialog.title"
          :copy="dialog.copy"
          @closeDialog="closeDialog"
        />
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
  data() {
    return {
      color: "blue",
      dialog: {
        title: "Foo",
        copy: {}
      }
    };
  },
  computed: {
    ...mapGetters(["get_dialog_state", "getProcessStep"])
  },
  methods: {
    ...mapMutations(["SET_DIALOG_STATE"]),
    closeDialog() {
      this.SET_DIALOG_STATE(false);
    },
    openDialog(e) {
      if (e.id) this.setSelectedStep(e.id, e.color);
      this.SET_DIALOG_STATE(true);
    },
    setSelectedStep(id, color) {
      const processStep = this.getProcessStep(id);
      this.color = color;
      console.log(processStep);
      this.dialog.title = processStep.title;
      this.dialog.copy = processStep.copy;
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
