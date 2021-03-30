import ref from 'vue-ref';
import { vcuInput } from './vcuInputDirective';
import { vcuDecorator } from './FormDecoratorDirective';
import { vcuPortal } from './portalDirective';

export default {
  install: Vue => {
    Vue.use(ref, { name: 'vcu-ref' });
    vcuInput(Vue);
    vcuDecorator(Vue);
    vcuPortal(Vue);
  },
};
