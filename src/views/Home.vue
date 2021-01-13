<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1
          class="display-2 font-weight-bold mb-3 mt-3 animate__animated animate__tada animate__delay-2s"
        >
          <v-icon size="62" class="mb-3">mdi-book-open-page-variant</v-icon>
          <br />
          The UX Manual
        </h1>

        <p class="subheading font-weight-regular">
          A reference guide and resource for the processes of which UX strategy
          is comprised. <br />Please note that this app is
          <strong>purely for demonstration purposes only!</strong> and forms
          part of my portfolio.
        </p>

        <p
          v-if="!$store.getters.userIsAuthenticated"
          class="subheading font-weight-regular"
        >
          You are currently not logged in. Feel free to signup to reveal all the
          UX process steps below.
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
        <UXProcessItem
          :dialog="dialog.visible"
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
import UXProcessItem from "@/components/UXProcessItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "UX_manual",
  components: {
    UXProcessSection,
    UXProcessItem
  },
  data() {
    return {
      color: "blue",
      dialog: {
        title: "UX Process Step",
        copy: {},
        visible: false
      }
    };
  },
  computed: {
    ...mapGetters(["getProcessStep"])
  },
  methods: {
    closeDialog() {
      this.dialog.visible = false;
    },
    openDialog(e) {
      this.dialog.visible = true;
      if (e.id) this.setSelectedStep(e.id, e.color);
    },
    setSelectedStep(id, color) {
      const processStep = this.getProcessStep(id);
      this.color = color;
      this.dialog.title = processStep.title;
      this.dialog.copy = processStep.copy;
    }
  }
};
</script>
