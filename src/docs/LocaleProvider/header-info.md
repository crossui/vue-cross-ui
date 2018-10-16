# LocaleProvider 国际化

为组件内建文案提供统一的国际化支持。

## 使用

LocaleProvider 使用 Vue 的 [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject) 特性，只需在应用外围包裹一次即可全局生效。

````handlebars
<template>
  <v-locale-provider :locale="zh_CN">
    <App />
  </v-locale-provider>
</template>
<script>
import zh_CN from 'vue-cross-ui/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
export default {
  data() {
    return {
      zh_CN,
    }
  }
}
</script>
````

### 其他国际化需求

本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用 [vue-i18n](https://github.com/kazupon/vue-i18n)

