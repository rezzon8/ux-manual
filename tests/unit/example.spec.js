import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Vuetify);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const props = {
      msg: "new message"
    };
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: props.msg }
    });
    expect(wrapper.text()).toMatch(props.msg);
  });
});
