> 进度圈

:::demo 标准的进度条。

```html
<template>
  <div>
    <v-progress type="circle" :percent="75"></v-progress>
    <v-progress type="circle" :percent="70" status="exception"></v-progress>
    <v-progress type="circle" :percent="100"></v-progress>
  </div>
</template>
<style scoped>
  .vcu-progress-circle-wrap,
  .vcu-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
</style>
```
:::
