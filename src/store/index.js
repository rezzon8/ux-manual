import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { auth } from "../firebase.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_data_loaded: false,
    is_data_processing: false,
    has_data_load_error: false,
    ux_processes: [],
    process_steps: [],
    dialog: false,
    user: null
  },
  getters: {
    getDataLoadState: state => {
      return state.is_data_loaded;
    },
    getUXProcesses: state => {
      return state.ux_processes;
    },
    getProcessStep: state => id => {
      return state.process_steps.find(step => step.id === id);
    },
    getProcessSteps: (state, getters) => id => {
      let steps = state.process_steps.filter(step => step.ux_process_id === id);
      // only return one process step if user is not logged in
      if (!getters.userIsAuthenticated) {
        steps = [steps[0]];
      }
      return steps;
    },
    getDialogState: state => {
      return state.dialog;
    },
    getUser: state => {
      return state.user;
    },
    userIsAuthenticated: state => {
      return state.user !== null && state.user !== undefined;
    }
  },
  mutations: {
    SET_DATA_LOAD_STATE(state, val) {
      state.is_data_loaded = val;
    },
    SET_DIALOG_STATE(state, val) {
      state.dialog = val;
    },
    SET_DATA_PROCESSING(state, val) {
      state.is_data_processing = val;
    },
    SET_DATA_LOAD_ERROR(state, val) {
      state.has_data_load_error = val;
    },
    SET_PROCESS_STEPS(state, val) {
      Vue.set(state.process_steps, state.process_steps.length, val);
    },
    SET_UX_PROCESSES(state, val) {
      Vue.set(state.ux_processes, state.ux_processes.length, val);
    },
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    GET_DATA({ commit, state }) {
      //
      state.is_data_processing = true;
      // reset data
      state.ux_processes = [];
      state.process_steps = [];
      let url = `ux_processes.json`;
      //
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(response => {
            //
            response.data["ux_processes"].forEach(item => {
              commit("SET_UX_PROCESSES", item);
            });
            response.data["process_steps"].forEach(item => {
              commit("SET_PROCESS_STEPS", item);
            });
            commit("SET_DATA_PROCESSING", false);
            commit("SET_DATA_LOAD_STATE", true);
            resolve();
          })
          .catch(error => {
            commit("SET_DATA_PROCESSING", false);
            commit("SET_DATA_LOAD_ERROR", false);
            reject(error);
          });
      });
    },
    SIGN_UP({ commit }, payload) {
      this.state.is_data_processing = true;
      return auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          this.state.is_data_processing = false;
          const newUser = {
            id: user.uid,
            email: user.email
          };
          commit("SET_USER", newUser);
        })
        .catch(e => {
          this.state.is_data_processing = false;
          console.log(e.message);
        });
    },
    LOGIN({ commit }, payload) {
      this.state.is_data_processing = true;
      return auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(auth => {
          this.state.is_data_processing = false;
          const loginUser = {
            id: auth.user.uid,
            email: auth.user.email
          };
          commit("SET_USER", loginUser);
        })
        .catch(e => {
          debugger;
          this.state.is_data_processing = false;
          console.log(e.message);
        });
    },
    LOGOUT({ commit }) {
      this.state.is_data_processing = true;
      return auth
        .signOut()
        .then(() => {
          this.state.is_data_processing = false;
          commit("SET_USER", null);
        })
        .catch(e => {
          this.state.is_data_processing = false;
          console.log(e.message);
        });
    }
  },
  modules: {}
});
