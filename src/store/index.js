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
    process_steps: []
  },
  getters: {
    get_data_load_state: state => {
      return state.is_data_loaded;
    }
  },
  mutations: {
    SET_DATA_LOAD_STATE(state, val) {
      state.is_data_loaded = val;
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
      Vue.set(state.process_steps, state.process_steps.length, val);
    }
  },
  actions: {
    GET_DATA({ commit, state }) {
      // if (state.is_data_loaded) return;
      //
      state.is_data_processing = true;
      let url = `ux_processes.jsons`;
      //
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(response => {
            //
            response.data["ux_processes"].forEach(domain => {
              commit("SET_UX_PROCESSES", domain);
            });
            response.data["process_steps"].forEach(domain => {
              commit("SET_PROCESS_STEPS", domain);
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
