import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import LoginForm from "@/components/forms/LoginForm.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
// added to prevent Vuetify error
document.body.setAttribute("data-app", true);

describe("LoginForm.vue", () => {
  beforeEach(() => {
    wrapper = mount(LoginForm, {
      localVue,
      vuetify
    });
  });
  it("should render", () => {
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
