import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import UXProcessSection from "@/components/UXProcessSection.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

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
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a list of process_steps", () => {
    const props = {
      process_steps: [
        {
          id: 1,
          ux_process_id: 1,
          title: "Stakeholder Interview",
          copy: {
            introduction: [
              "We kick-off each project with a meeting with you: we need to talk about your mission, goals and context. This meeting ensures that we start the UX design process by understanding the problem. We also need to have a good knowledge of your domain in order to ask the right questions, find the best solutions."
            ],
            helps_how: {
              title: "How does it help?",
              copy: [
                "As a result of the stakeholder interview, we gain better understanding of the business goals and your mission, and we also become mini-experts of the given domain."
              ]
            },
            you_get: {
              title: "What will you get? - FOO",
              copy: [
                "After the stakeholder interview and domain expert interviews, we provide you a structured document about the insights we collected. We both will use it as a reference point throughout the whole project."
              ]
            },
            additional_info: [
              "Next to the Stakeholder Interviews, we also interview the domain experts in order to understand the problem space better. For example if we design the interface of a device used by healthcare professionals, we need to know the important steps of the process, the context, under what circumstances is it going to be used and so on."
            ],
            the_process: {
              title: "What is the process?",
              copy: [
                "At the beginning of a UX research and design project we conduct a Stakeholder Interview in order to find out the following:"
              ],
              steps: [
                "What are your business goals?",
                "Do you have any existing research or design material?",
                "What do you already know about your users (target audience)?",
                "Your background, story and mission",
                "Who are your known competitors?",
                "Additional project-related information (deadlines, team members etc.)"
              ],
              summary: []
            }
          }
        }
      ]
    };
    const localVue = createLocalVue();
    const wrapper = mount(UXProcessSection, {
      localVue,
      vuetify,
      propsData: { process_steps: props.process_steps }
    });
    expect(wrapper.find(".v-card__title").text()).toMatch(
      "Stakeholder Interview"
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
