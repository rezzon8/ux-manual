import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import Home from "@/views/Home.vue";

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

// fixes: [Vuetify] Unable to locate target [data-app]
document.body.setAttribute("data-app", true);

const factory = () => {
  return mount(Home, {
    propsData: {},
    computed: {
      getProcessStep() {
        return jest.fn(() => {
          return { title: "asda", copy: { introduction: "copy" } };
        });
      }
    },
    data: () => ({
      color: "blue",
      dialog: {
        title: "UX Process Step",
        copy: {},
        visible: false
      }
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
      process_steps: [
        {
          id: 1,
          title: "Test Title",
          copy: "Test copy goes here..."
        }
      ]
    };
    getters = {
      userIsAuthenticated: jest.fn(() => false)
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
  it("should define a closeDialog method", () => {
    expect(wrapper.vm.closeDialog).toBeDefined();
  });
  it("should define a openDialog method", () => {
    expect(wrapper.vm.openDialog).toBeDefined();
  });
  it("should define a setSelectedStep method", () => {
    expect(wrapper.vm.setSelectedStep).toBeDefined();
  });
  it("should hide the dialog", () => {
    wrapper.vm.dialog.visible = true;
    wrapper.vm.closeDialog();
    expect(wrapper.vm.dialog.visible).toBe(false);
  });
  it("should fail to run method if dialog.visible is false", () => {
    // NOTE: testing watcher
    wrapper.vm.$options.watch["dialog.visible"].call(wrapper.vm, false);
    wrapper.vm.closeDialog();
    expect(wrapper.vm.dialog.visible).toBe(false);
  });
  it("should show the dialog", () => {
    wrapper.vm.dialog.visible = false;
    wrapper.vm.openDialog({ id: 1, color: "blue" });
    expect(wrapper.vm.dialog.visible).toBe(true);
  });
});
