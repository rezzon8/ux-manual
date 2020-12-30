import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import UX_manual from "@/views/Home.vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

Vue.use(Vuetify); // added to prevent vuetify lint errors

describe("Home.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let http;

  beforeEach(() => {
    vuetify = new Vuetify();
    http = axios();
  });

  it("should have a custom title", () => {
    const wrapper = mount(UX_manual, {
      vuetify,
      localVue,
      http
    });
    expect(wrapper.find("h1")).toMatch("The UX Manual");
  });
});
