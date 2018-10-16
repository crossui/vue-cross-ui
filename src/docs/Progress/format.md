> 自定义文字格式

:::demo `format` 属性指定格式。

```html
<template>
  <div>
    <v-progress type="circle" :percent="75" :format="percent => `${percent} Days`"></v-progress>
    <v-progress type="circle" :percent="100" :format="() => 'Done'"></v-progress>
  </div>
</template>
<style scoped>
  div.vcu-progress-circle,
  div.vcu-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
```
:::

