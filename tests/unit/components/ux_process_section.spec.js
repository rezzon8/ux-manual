import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import UXProcessSection from "@/components/UXProcessSection.vue";
Vue.use(Vuetify); // added to prevent vuetify lint errors
const localVue = createLocalVue();
const props = {
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
      ux_process_id: 1,
      title: "Stakeholder Interview",
      copy: {
        introduction: [
          "We kick-off each project with a meeting with you: we need to talk about your mission, goals and context. This meeting ensures that we start the UX design process by understanding the problem. We also need to have a good knowledge of your domain in order to ask the right questions, find the best solutions."
        ]
      }
    }
  ]
};
describe("UXProcessSection.vue", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("should have a custom title", () => {
    const props = {
      title: "new message"
    };
    const wrapper = mount(UXProcessSection, {
      propsData: { title: props.title }
    });
    expect(wrapper.text()).toMatch(props.title);
  });
  it("should render a list of process_steps", () => {
    const wrapper = mount(UXProcessSection, {
      localVue,
      vuetify,
      propsData: { process_steps: props.process_steps }
    });
    expect(wrapper.find(".v-card__title").text()).toMatch(
      "Stakeholder Interview"
    );
  });
  it("should emit a click handler", async () => {
    const wrapper = mount(UXProcessSection, {
      localVue,
      vuetify,
      propsData: { process_steps: props.process_steps }
    });
    console.log(wrapper.html());
    await wrapper.trigger("click");
    console.log(wrapper.html());
  });
});
