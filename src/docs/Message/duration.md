> 修改延时

:::demo 自定义时长 `10s`，默认时长为 `3s`。

```html
<template>
  <v-button @click="success">Customized display duration</v-button>
</template>
<script>
export default {
  methods: {
    success () {
      this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
    },
  }
}
</script>
```
:::