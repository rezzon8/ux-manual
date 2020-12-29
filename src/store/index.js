import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_data_loaded: false,
    is_data_processing: false,
    has_data_load_error: false
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
    }
  },
  actions: {
    GET_DATA({ commit, state }) {
      if (state.is_data_loaded) return;
      //
      state.is_data_processing = true;
      let url = `/reportapi/`;
      //
      return new Promise((resolve, reject) => {
        this.$http
          .get(url)
          .then(response => {
            commit("SET_DATA_LOAD_STATE", true);
            //
            response.data["domains"].forEach(domain => {
              commit("SET_DOMAIN", domain);
            });
            response.data["topics"].forEach(topic => {
              commit("SET_TOPIC", topic);
            });
            response.data["indicators"].forEach(indicator => {
              commit("SET_INDICATOR", indicator);
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
