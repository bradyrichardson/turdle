import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import router from "./router";

Vue.config.productionTip = false;

export default {
  data() {
    return {
      copyMessage: Array,
    };
  },
};

Vue.use(VueClipboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
