import Vue from "vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
