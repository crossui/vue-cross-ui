> 卡片模式

:::demo 用于嵌套在空间有限的容器中。

```html
<template>
  <div :style="{ width: '500px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <v-calendar :fullscreen="false" @panelChange="onPanelChange" />
  </div>
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

