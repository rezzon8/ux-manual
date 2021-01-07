import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import UXProcessItem from "@/components/UXProcessItem.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

localVue.use(Vuex);

let wrapper;
// added to prevent Vuetify error
document.body.setAttribute("data-app", true);

const props = {
  title: "UX Audit",
  copy:
    "After a kickoff meeting about your goals and mission, we conduct a UX review of your current status. As a result, you get an analysis stating the opportunities to develop. We offer UX Audit as an independent service as well.",
  color: "#3f51b5",
  dialog: true
};

const getters = {
  get_dialog_state: () => true
};

const store = new Vuex.Store({ getters, props });

describe("UXProcessItem.vue", () => {
  beforeEach(() => {
    wrapper = mount(UXProcessItem, {
      propsData: {
        dialog: true
      },
      localVue,
      vuetify,
      store
    });
  });
  it("should render", () => {
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
