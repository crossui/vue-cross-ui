> 讨嫌的小红点

:::demo 没有具体的数字。

```html
<template>
<div id="components-badge-demo-dot" class="components-badge-demo">
  <v-badge dot>
    <v-icon type="notification"></v-icon>
  </v-badge>
  <v-badge :count="0" dot>
    <v-icon type="notification"></v-icon>
  </v-badge>
  <v-badge dot>
    <a href="#">Link something</a>
  </v-badge>
</div>
</template>
<style scoped>
#components-badge-demo-dot .vcuicon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
```
:::
