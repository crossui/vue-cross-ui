> 迷你

:::demo 迷你版本。

```html
<template>
  <div id="components-pagination-demo-mini">
    <v-pagination size="small" :total="50"><v-pagination>
    <v-pagination size="small" :total="50" showSizeChanger showQuickJumper><v-pagination>
    <v-pagination size="small" :total="50" :showTotal="total => `Total ${total} items`" ><v-pagination>
  </div>
</template>
<style scoped>
#components-pagination-demo-mini .vcu-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
```
:::

