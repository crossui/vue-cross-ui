export function vcuPortal(Vue) {
  return Vue.directive('vcu-portal', {
    inserted(el, binding) {
      const { value } = binding;
      const parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    },
    componentUpdated(el, binding) {
      const { value } = binding;
      const parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    },
  });
}

export default {
  install: Vue => {
    vcuPortal(Vue);
  },
};
