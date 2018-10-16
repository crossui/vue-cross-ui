> 基本

:::demo 一个通用的日历面板，支持年/月切换。

```html
<template>
  <v-calendar @panelChange="onPanelChange"></v-calendar>
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
}
</script>
```
:::