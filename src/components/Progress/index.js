import mrProgress from "./mrProgress";

/* istanbul ignore next */
mrProgress.install = function(Vue) {
  Vue.component(mrProgress.name, mrProgress);
};

export default mrProgress;
