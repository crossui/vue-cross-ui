> 基本

:::demo 基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

```html
<template>
  <div class="code-box-demo">
    <v-slider :defaultValue="30" :disabled="disabled"></v-slider>
    <v-slider range :defaultValue="[20, 50]" :disabled="disabled"></v-slider>
    Disabled: <v-switch size="small" :checked="disabled" @change="handleDisabledChange"></v-slider>
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
    handleDisabledChange(disabled) {
      this.disabled = disabled
    }
  },
}
</script>
<style scoped>
.code-box-demo .vcu-slider {
  margin-bottom: 16px;
}
</style>
```
:::