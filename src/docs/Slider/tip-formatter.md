> 自定义提示

:::demo 使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。

```html
<template>
  <div>
    <v-slider :tipFormatter="formatter"></v-slider>
    <v-slider :tipFormatter="null"></v-slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    formatter(value) {
      return `${value}%`;
    }
  },
}
</script>
```
:::
