<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
      scrollable
      @click:outside="$emit('closeDialog')"
    >
      <v-card v-if="$store.getters.get_data_load_state">
        <v-card-title class="headline" style="position:relative;">
          <div style="z-index: 1;">
            {{ title }}
          </div>
          <v-sheet :color="color"></v-sheet>
        </v-card-title>

        <v-card-text class="pt-5">
          <v-row>
            <v-col>
              <h3>Introduction</h3>
              <p v-for="(item, i) in copy.introduction" :key="i">{{ item }}</p>
            </v-col>
          </v-row>
          <v-row v-if="copy.helps_how">
            <v-col>
              <h3>{{ copy.helps_how.title }}</h3>
              <p v-for="(item, j) in copy.helps_how.copy" :key="j">
                {{ item }}
              </p>
            </v-col>
          </v-row>
          <v-row v-if="copy.you_get">
            <v-col>
              <h3>{{ copy.you_get.title }}</h3>
              <p v-for="(item, k) in copy.you_get.copy" :key="k">{{ item }}</p>
            </v-col>
          </v-row>
          <v-row v-if="copy.additional_info">
            <v-col>
              <h3>Additional information</h3>
              <p v-for="(item, l) in copy.additional_info" :key="l">
                {{ item }}
              </p>
            </v-col>
          </v-row>
          <v-row v-if="copy.the_process">
            <v-col>
              <h3>{{ copy.the_process.title }}</h3>
              <p v-for="(item, m) in copy.the_process.copy" :key="m">
                {{ item }}
              </p>
              <ul>
                <li v-for="(item, n) in copy.the_process.steps" :key="n">
                  {{ item }}
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-row v-if="copy.the_process">
            <v-col>
              <p v-for="(item, o) in copy.the_process.summary" :key="o">
                {{ item }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :color="color" @click="$emit('closeDialog')">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UXProcessItem",
  props: {
    dialog: {
      type: Boolean,
      required: false
    },
    color: {
      type: String,
      default: "blue"
    },
    title: {
      type: String,
      default: "Disclaimer"
    },
    copy: {
      type: Object
    }
  }
};
</script>

<style>
.v-dialog .v-card__title .v-sheet {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
