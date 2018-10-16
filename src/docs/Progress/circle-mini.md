> 小型进度圈

:::demo 小一号的圈形进度。

```html
<template>
  <div>
    <v-progress type="circle" :percent="30" :width="80"></v-progress>
    <v-progress type="circle" :percent="70" :width="80" status="exception"></v-progress>
    <v-progress type="circle" :percent="100" :width="80"></v-progress>
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


