import Vue from "vue";
import App from "./App.vue";
// import mrProgress from '../src/index'

// Vue.component(mrProgress.name, mrProgress)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
