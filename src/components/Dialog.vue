<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
      @click:outside="$emit('closeDialog')"
    >
      <v-card>
        <v-card-title class="headline" style="position:relative;">
          <div style="z-index: 1;">
            {{ title }}
          </div>
          <v-sheet :color="color"></v-sheet>
        </v-card-title>

        <v-card-text>
          <div>
            <h4>Introduction</h4>
            <p v-for="(item, i) in copy.introduction" :key="i">{{ item }}</p>
          </div>
          <div>
            <h4>{{ copy.helps_how.title }}</h4>
            <p v-for="(item, i) in copy.helps_how.copy" :key="i">{{ item }}</p>
          </div>
          <div>
            <h4>{{ copy.you_get.title }}</h4>
            <p v-for="(item, i) in copy.you_get.copy" :key="i">{{ item }}</p>
          </div>
          <div>
            <p v-for="(item, i) in copy.additional_info" :key="i">
              {{ item }}
            </p>
          </div>
          <div>
            <h4>{{ copy.the_process.title }}</h4>
            <p v-for="(item, i) in copy.the_process.copy" :key="i">
              {{ item }}
            </p>
            <ul>
              <li v-for="(item, i) in copy.the_process.steps" :key="i">
                {{ item }}
              </li>
            </ul>
            <br />
            <h4>Summary</h4>
            <p v-for="(item, i) in copy.the_process.summary" :key="i">
              {{ item }}
            </p>
          </div>
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
.v-card__title .v-sheet {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
