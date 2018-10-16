> 不可用

:::demo 点击按钮切换可用状态。

```html
<template>
  <div>
    <v-input-number :min="1" :max="10" :disabled="disabled" :defaultValue="3"></v-input-number>
    <div style="marginTop:20px">
      <v-button @click="toggle" type="primary">Toggle disabled</v-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        disabled: true,
      }
    },
    methods: {
      toggle() {
        this.disabled = !this.disabled
      }
    },
  }
</script>
```
:::


