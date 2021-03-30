import PropTypes from '../_util/vue-types';
import defaultLocaleData from './default';

export default {
  name: 'LocaleReceiver',
  props: {
    componentName: PropTypes.string.def('global'),
    defaultLocale: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    children: PropTypes.func,
  },
  inject: {
    localeData: { default: () => ({}) },
  },
  methods: {
    getLocale() {
      const { componentName, defaultLocale } = this;
      const locale = defaultLocale || defaultLocaleData[componentName || 'global'];
      const { vcuLocale } = this.localeData;

      const localeFromContext = componentName && vcuLocale ? vcuLocale[componentName] : {};
      return {
        ...(typeof locale === 'function' ? locale() : locale),
        ...(localeFromContext || {}),
      };
    },

    getLocaleCode() {
      const { vcuLocale } = this.localeData;
      const localeCode = vcuLocale && vcuLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (vcuLocale && vcuLocale.exist && !localeCode) {
        return defaultLocaleData.locale;
      }
      return localeCode;
    },
  },
  render() {
    const { $scopedSlots } = this;
    const children = this.children || $scopedSlots.default;
    const { vcuLocale } = this.localeData;
    return children(this.getLocale(), this.getLocaleCode(), vcuLocale);
  },
};
