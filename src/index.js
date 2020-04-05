import mrProgress from "@/components/Progress";

// 以数组的结构保存组件，便于遍历
const components = [mrProgress];

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 组件列表
  ...components
};
