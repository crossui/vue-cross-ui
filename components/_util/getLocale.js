export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  let locale = {};
  if (context && context.vcuLocale && context.vcuLocale[componentName]) {
    locale = context.vcuLocale[componentName];
  } else {
    const defaultLocale = getDefaultLocale();
    locale = defaultLocale.default || defaultLocale;
  }

  const result = {
    ...locale,
    ...props.locale,
  };
  result.lang = {
    ...locale.lang,
    ...props.locale.lang,
  };
  return result;
}

export function getLocaleCode(context) {
  const localeCode = context.vcuLocale && context.vcuLocale.locale;
  // Had use LocaleProvide but didn't set locale
  if (context.vcuLocale && context.vcuLocale.exist && !localeCode) {
    return 'zh-cn';
  }
  return localeCode;
}
