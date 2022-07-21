import VirtualTree from "./VirtualTree.vue";
const install = function (Vue) {
  Vue.component("virtual-tree", VirtualTree);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install, VirtualTree };
