import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";

import "./icons"; // icon
// components
import iComponents from "@/components";

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: "small" });
Vue.use(iComponents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
