import Vue from "vue";
import App from "./App.vue";
import Progress from '../src/index'

Vue.use(Progress)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
