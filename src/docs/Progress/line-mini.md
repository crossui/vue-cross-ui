
> 小型进度条

:::demo 适合放在较狭窄的区域内。

```html
<template>
  <div style="width: 170px">
    <v-progress :percent="30" size="small"></v-progress>
    <v-progress :percent="50" size="small" status="active"></v-progress>
    <v-progress :percent="70" size="small" status="exception"></v-progress>
    <v-progress :percent="100" size="small"></v-progress>
  </div>
</template>
```
:::

