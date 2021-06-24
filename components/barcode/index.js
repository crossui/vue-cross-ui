import Barcode from './Barcode';
import Base from '../base';

Barcode.install = function(Vue) {
  Vue.use(Base);
  Vue.component(Barcode.name, Barcode);
};

export default Barcode;
