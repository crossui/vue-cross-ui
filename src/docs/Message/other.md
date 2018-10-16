> 其他提示类型

:::demo 包括成功、失败、警告。

```html
<template>
  <div>
    <v-button @click="success">Success</v-button>
    <v-button @click="error">Error</v-button>
    <v-button @click="warning">Warning</v-button>
  </div>
</template>
<script>
  export default {
    methods: {
      success () {
        this.$message.success('This is a message of success');
      },
      error () {
        this.$message.error('This is a message of error');
      },
      warning () {
        this.$message.warning('This is message of warning');
      },
    }
  }
</script>
```
:::

