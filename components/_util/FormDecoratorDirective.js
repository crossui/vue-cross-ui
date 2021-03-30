export function vcuDecorator(Vue) {
  return Vue.directive('decorator', {});
}

export default {
  // just for tag
  install: Vue => {
    vcuDecorator(Vue);
  },
};
