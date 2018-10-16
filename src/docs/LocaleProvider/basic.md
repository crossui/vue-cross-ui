> 基本

:::demo 最简单的用法。

```html
<template>
  <v-locale-provider :locale="zhCN">
    <v-pagination :defaultCurrent="1" :total="50" showSizeChanger></v-pagination>
  </v-locale-provider>
</template>
<script>
import zhCN from '../../../components/locale-provider/zh_CN';    
// 在线的改用 vue-cross-ui/locale-provider/zh_CN
export default {
  data(){
    return {
      zhCN,
    }
  }
}
</script>
```
:::