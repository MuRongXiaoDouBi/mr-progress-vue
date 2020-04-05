import mrProgress from "./mrProgress.vue";
export default mrProgress;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("mr-progress", mrProgress);
}
