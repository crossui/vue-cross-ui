> 基本

:::demo 简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

```html
<template>
  <div class="components-badge-demo">
    <v-badge count="5">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge count="0" showZero>
      <a href="#" class="head-example"></a>
    </v-badge>
  </div>
</template>
```
:::