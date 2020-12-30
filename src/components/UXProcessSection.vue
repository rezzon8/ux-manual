<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="display-1">{{ title }}</h4>
      </v-col>
      <v-col
        v-for="item in process_steps"
        :key="item.id"
        :href="item.href"
        class="mb-5 d-flex align-stretch"
        cols="4"
      >
        <v-card
          outlined
          v-for="(copy, index) in item.copy.introduction"
          :key="index"
          class="d-flex align-start flex-column"
        >
          <v-card-title class="primary mb-2" style="width: 100%">
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ copy }}
          </v-card-text>
          <v-card-actions class="mt-auto align-self-end">
            <v-btn outlined depressed color="primary white--text">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UXProcessSection",

  props: {
    process_steps: Array,
    title: String
  },

  data: () => ({}),
  computed: {}
};
</script>
