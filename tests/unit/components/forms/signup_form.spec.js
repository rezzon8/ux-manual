import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import SignUpForm from "@/components/forms/SignUpForm.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
// added to prevent Vuetify error
document.body.setAttribute("data-app", true);

describe("UXProcessItem.vue", () => {
  beforeEach(() => {
    wrapper = mount(SignUpForm, {
      localVue,
      vuetify
    });
  });
  it("should render", () => {
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
