> 清除

:::demo 支持允许或者禁用清除。

```html
<template>
  <div>
    <v-rate :defaultValue="3"></v-rate> allowClear: true
    <br />
    <br />
    <v-rate :allowClear="false" :defaultValue="3"></v-rate> allowClear: false
    <br />
    <br />
  </div>
</template>
```
:::