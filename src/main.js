import Vue from "vue";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
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
  render: h => h(App),
  created() {
    firebase.initializeApp = {
      apiKey: "AIzaSyA_yaIVWnWk8XNTmMW_pTc2OdEKzVvB30w",
      authDomain: "the-ux-manual.firebaseapp.com",
      projectId: "the-ux-manual",
      storageBucket: "the-ux-manual.appspot.com",
      messagingSenderId: "34229624456",
      appId: "1:34229624456:web:b03bf6c4f087db6f88c93d",
      measurementId: "G-5GRTYYWWE5"
    };
  }
}).$mount("#app");
