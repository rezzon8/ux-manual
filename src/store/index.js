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
            commit(
              "SET_USER_CAN_NAVIGATE_REPORT",
              response.data["user_can_navigate_report"]
            );
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
            state.is_data_loaded = true;
            state.is_data_processing = false;
            state.has_data_load_error = false;
            resolve();
          })
          .catch(error => {
            state.is_data_processing = false;
            state.has_data_load_error = true;
            reject(error);
          });
      });
    }
  },
  modules: {}
});
