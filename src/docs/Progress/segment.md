> 分段进度条

:::demo 分段进度条

```html
<template>
  <v-tooltip title="3 done / 3 in progress / 4 to do">
    <v-progress :percent="60" :successPercent="30"></v-progress>
  </v-tooltip>
</template>
```
:::