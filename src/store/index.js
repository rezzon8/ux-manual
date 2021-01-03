import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_data_loaded: false,
    is_data_processing: false,
    has_data_load_error: false,
    ux_processes: [],
    process_steps: [],
    dialog: true
  },
  getters: {
    get_data_load_state: state => {
      return state.is_data_loaded;
    },
    getUXProcesses: state => {
      return state.ux_processes;
    },
    getProcessSteps: state => id => {
      return state.process_steps.filter(step => step.ux_process_id === id);
    },
    get_dialog_state: state => {
      return state.dialog;
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
    }
  },
  modules: {}
});
