<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          The UX Manual
        </h1>

        <p class="subheading font-weight-regular">
          A reference and resouce for the processes <br />of which UX strategy
          is comprised
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <UXProcessSection msg="Welcome to Your Vue.js App" />
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
  methods: {}
};
</script>
