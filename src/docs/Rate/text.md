> 文案展现

:::demo 给评分组件加上文案展示。

```html
<template>
  <span>
    <v-rate v-model='value'></v-rate>
    <span class="vcu-rate-text">{{value}} stars</span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    }
  },
}
</script>
```
:::