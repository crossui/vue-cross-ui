import vcuDirective from '../_util/vcuDirective';
const base = {};
const install = function(Vue) {
  base.Vue = Vue;
  Vue.use(vcuDirective);
};
base.install = install;

export default base;
