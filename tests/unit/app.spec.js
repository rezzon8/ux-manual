import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import App from "@/App.vue";

Vue.use(Vuelidate);
Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
let router;
let store;
let state;
let getters;
let actions;
let mutations;

localVue.use(VueRouter);
localVue.use(Vuex);

router = new VueRouter();

const factory = () => {
  return mount(App, {
    propsData: {},
    data: () => ({
      email: "test@test.com",
      password: "12345678",
      confirmPassword: "12345678",
      showPassword: false
    }),
    mocks: {},
    stubs: {},
    store,
    vuetify,
    router,
    localVue
  });
};

describe("App.vue", () => {
  beforeEach(() => {
    state = {
      key: {}
    };
    getters = {
      userIsAuthenticated: jest.fn(false)
    };
    actions = {
      GET_DATA: jest.fn(),
      LOGIN: jest.fn(),
      SIGN_UP: jest.fn(),
      LOGOUT: jest.fn()
    };
    mutations = {
      someMutation: jest.fn()
    };
    store = new Vuex.Store({
      state,
      getters,
      actions,
      mutations
    });
    wrapper = factory();
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it("should render", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it("should define a signUp method", () => {
    expect(wrapper.vm.signUp).toBeDefined();
  });
  it("should define a logIn method", () => {
    expect(wrapper.vm.logIn).toBeDefined();
  });
  it("should define a logOut method", () => {
    expect(wrapper.vm.logOut).toBeDefined();
  });
  it("should dispatch SIGN_UP action", () => {
    const spy = jest.spyOn(actions, "SIGN_UP");
    wrapper.vm.signUp();
    expect(spy).toBeCalled();
  });
  it("should reject SIGN_UP action", () => {
    wrapper.vm.$store._actions.SIGN_UP[0] = jest.fn(() => {
      return Promise.reject();
    });
    wrapper.vm.signUp();
  });
  it("should dispatch LOGIN action", () => {
    const spy = jest.spyOn(actions, "LOGIN");
    wrapper.vm.logIn();
    expect(spy).toBeCalled();
  });
  it("should reject LOGIN action", () => {
    wrapper.vm.$store._actions.LOGIN[0] = jest.fn(() => {
      return Promise.reject();
    });
    wrapper.vm.logIn();
  });
  it("should dispatch LOGOUT action", () => {
    const spy = jest.spyOn(actions, "LOGOUT");
    wrapper.vm.logOut();
    expect(spy).toBeCalled();
  });
  it("should reject LOGOUT action", () => {
    wrapper.vm.$store._actions.LOGOUT[0] = jest.fn(() => {
      return Promise.reject();
    });
    wrapper.vm.logOut();
  });
  it("should reject GET_DATA action", () => {
    actions = {
      ...actions,
      GET_DATA: jest.fn(() => {
        return Promise.reject();
      })
    };
    store = new Vuex.Store({
      getters,
      actions
    });
    wrapper = factory();
    wrapper.vm.logOut();
  });
});
