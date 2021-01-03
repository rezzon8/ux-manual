import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Dialog from "@/components/Dialog.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
document.body.setAttribute("data-app", true);

describe("Dialog.vue", () => {
  beforeEach(() => {
    wrapper = mount(Dialog, {
      propsData: {
        dialog: true
      },
      localVue,
      vuetify
    });
  });
  it("should render", () => {
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
