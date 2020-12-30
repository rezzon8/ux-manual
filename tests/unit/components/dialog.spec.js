import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Dialog from "@/components/Dialog.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

describe("UXProcessSection.vue", () => {
  const app = document.createElement("div");
  app.setAttribute("data-app", true);
  document.body.append(app);
  let vuetify;
  let localVue = createLocalVue();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should have a custom title", () => {
    const props = {
      title: "new message"
    };
    const wrapper = mount(Dialog, {
      propsData: { title: props.title },
      vuetify,
      localVue
    });
    expect(wrapper.text()).toMatch(props.title);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
