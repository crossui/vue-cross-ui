> 封顶数字

:::demo 超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

```html
<template>
  <div class="components-badge-demo">
    <v-badge :count="99">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge :count="100">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge :count="99" :overflowCount="10">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge :count="1000" :overflowCount="999">
      <a href="#" class="head-example"></a>
    </v-badge>
  </div>
</template>
```
:::
