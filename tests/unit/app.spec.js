import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import UX_manual from "@/App.vue";

Vue.use(Vuetify); // added to prevent Vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

localVue.use(Vuex);

let wrapper;
// added to prevent Vuetify error
document.body.setAttribute("data-app", true);

const state = {
  ux_processes: [
    {
      id: 1,
      title: "UX Audit",
      copy:
        "After a kickoff meeting about your goals and mission, we conduct a UX review of your current status. As a result, you get an analysis stating the opportunities to develop. We offer UX Audit as an independent service as well.",
      color: "#3f51b5"
    }
  ],
  process_steps: [
    {
      id: 1,
      title: "Stakeholder Interview",
      copy: {
        introduction: [
          "We kick-off each project with a meeting with you: we need to talk about your mission, goals and context. This meeting ensures that we start the UX design process by understanding the problem. We also need to have a good knowledge of your domain in order to ask the right questions, find the best solutions."
        ]
      }
    }
  ],
  dialog: true
};

const actions = {
  GET_DATA: jest.fn()
};

const store = new Vuex.Store({ actions, state });

const $route = { path: "/" };

describe("Home.vue", () => {
  beforeEach(() => {
    wrapper = mount(UX_manual, {
      mocks: {
        $route
      },
      store,
      localVue,
      vuetify
    });
  });
  it("should render", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("display a title", () => {
    console.log(wrapper.html());
    expect(wrapper.find("h2").html()).toContain("The UX Manual");
    expect(wrapper.find("h2").exists()).toBe(true);
  });
  it("should have / route", () => {
    expect(wrapper.vm.$route.path).toBe($route.path);
  });
  it("should contain a dialog", () => {
    expect(wrapper.get(".v-dialog__container").exists()).toBe(true);
  });
  // it("should contain a dialog", () => {
  //   expect(wrapper.get(".v-dialog__container").exists()).toBe(true);
  // });
  // it("should call GET_DATA action", () => {
  //   expect(actions.GET_DATA).toHaveBeenCalled();
  // });
});