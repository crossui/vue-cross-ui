> block 按钮

:::demo `block`属性将使按钮适合其父宽度。

```html
<template>
  <div class="demo-btn-box">
    <v-button type="primary" block>Primary</v-button>
    <v-button block>Default</v-button>
    <v-button type="dashed" block>Dashed</v-button>
    <v-button type="danger" block>danger</v-button>
  </div>
</template>
<style scoped>
.demo-btn-box .vcu-btn-block{
  margin-bottom: 10px;
}
</style>
```
:::