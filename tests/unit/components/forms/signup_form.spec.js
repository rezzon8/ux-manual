import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import SignUpForm from "@/components/forms/SignUpForm.vue";

Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
let store;
let actions;
let mutations;
let state;

localVue.use(Vuex);

const factory = (computed = {}) => {
  return mount(SignUpForm, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
    store,
    vuetify,
    computed,
    localVue
  });
};

beforeEach(() => {
  actions = {
    someAction: jest.fn()
  };
  mutations = {
    someMutation: jest.fn()
  };
  state = {
    key: {}
  };
  store = new Vuex.Store({
    actions,
    mutations,
    state
  });
  wrapper = factory();
});

afterEach(() => {
  wrapper.destroy();
});

describe("SignUpForm.vue", () => {
  it("should render", () => {
    console.log(wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
