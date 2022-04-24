import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export default {
  data() {
    return {
      answer: String,
    };
  },
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
