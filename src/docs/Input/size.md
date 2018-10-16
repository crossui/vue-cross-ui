> 三种大小

:::demo 我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。注意： 在表单里面，我们只使用大尺寸的输入框。

```html
<template>
  <div class="components-input-demo-size">
    <v-input size="large" placeholder="large size"></v-input>
    <v-input placeholder="default size"></v-input>
    <v-input size="small" placeholder="small size"></v-input>
  </div>
</template>
<style scoped>
.components-input-demo-size .vcu-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
```
:::
