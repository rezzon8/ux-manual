<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>

        <h3 class="display-1 mt-3">{{ title }}</h3>
        <v-row>
          <v-col cols="12" lg="9">
            <h4 class="subtitle-1">{{ copy }}</h4>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-for="item in process_steps"
        :key="item.id"
        :href="item.href"
        class="mb-5 d-flex align-stretch"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          v-for="(copy, index) in item.copy.introduction"
          :key="index"
          class="d-flex align-start flex-column elevation-5"
        >
          <v-card-title
            style="width: 100%;"
            :style="{ backgroundColor: color }"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ copy }}
          </v-card-text>
          <v-card-actions class="mt-auto align-self-end">
            <v-btn
              :style="{ backgroundColor: color }"
              class="white--text"
              @click="
                $emit('openDialog', {
                  id: item.id,
                  color: color
                })
              "
            >
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
    title: String,
    copy: String,
    color: String
  }
};
</script>
