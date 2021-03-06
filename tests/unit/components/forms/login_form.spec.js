import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Vuelidate from "vuelidate";
import LoginForm from "@/components/forms/LoginForm.vue";

Vue.use(Vuelidate);
Vue.use(Vuetify); // added to prevent vuetify lint errors

const localVue = createLocalVue();
const vuetify = new Vuetify();

let wrapper;
let store;
let state;
let getters;
let actions;
let mutations;

localVue.use(Vuex);

const factory = () => {
  return mount(LoginForm, {
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
    localVue
  });
};

describe("LoginForm.vue", () => {
  beforeEach(() => {
    state = {
      key: {}
    };
    getters = {
      someGetters: jest.fn()
    };
    actions = {
      someAction: jest.fn()
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
  it("submit button should call LogIn()", () => {
    const spy = jest.spyOn(wrapper.vm, "logIn");
    const submitFormBtn = "button[type=submit]";
    wrapper.find(submitFormBtn).trigger("click");
    expect(wrapper.vm.$v.$invalid).toBe(false);
    expect(spy).toBeCalled();
  });
  it("should emit with data - allowing login", () => {
    wrapper.vm.logIn();
    wrapper.vm.$emit("login");
    expect(wrapper.emitted().login[0]).toEqual([
      { email: "test@test.com", password: "12345678" }
    ]);
    expect(wrapper.vm.$v.$invalid).toBe(false);
  });
  it("should prevent login", () => {
    wrapper.vm.email = "";
    wrapper.vm.password = "";
    wrapper.vm.logIn();
    expect(wrapper.vm.$v.$invalid).toBe(true);
  });
  it("should compute emailErrors", () => {
    wrapper.vm.$v.email.$touch();
    wrapper.vm.email = "";
    expect(wrapper.vm.emailErrors).toContain("E-mail is required.");
    wrapper.vm.email = "1234";
    expect(wrapper.vm.emailErrors).toContain("Must be valid e-mail.");
  });
  it("should compute passwordErrors", () => {
    wrapper.vm.$v.password.$touch();
    wrapper.vm.password = "";
    expect(wrapper.vm.passwordErrors).toContain("Password is required.");
  });
  it("should be valie if the form is ready", () => {
    wrapper.vm.clearForm();
    expect(wrapper.vm.$v.$invalid).toBe(true);
  });
  it("clear button should clear the form", () => {
    expect(wrapper.vm.email).toBeTruthy();
    const spy = jest.spyOn(wrapper.vm, "clearForm");
    const clearFormBtn = ".clear-form";
    wrapper.find(clearFormBtn).trigger("click");
    expect(spy).toBeCalled();
  });
  it("clear button should call clearForm()", () => {
    wrapper.vm.clearForm = jest.fn();
    const clearFormBtn = ".clear-form";
    wrapper.find(clearFormBtn).trigger("click");
    expect(wrapper.vm.clearForm.mock.calls.length).toBe(1);
  });
});
