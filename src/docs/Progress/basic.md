> 基本

:::demo 标准的进度条。

```html
<template>
  <div>
    <v-progress :percent="30"></v-progress>
    <v-progress :percent="50" status="active"></v-progress>
    <v-progress :percent="70" status="exception"></v-progress>
    <v-progress :percent="100"></v-progress>
    <v-progress :percent="50" :showInfo="false"></v-progress>
  </div>
</template>
```
:::