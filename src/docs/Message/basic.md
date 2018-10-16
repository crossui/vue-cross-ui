> 普通提示

:::demo 信息提醒反馈。

```html
<template>
  <v-button type="primary" @click="info">Display normal message</v-button>
</template>
<script>
  export default {
    methods: {
      info () {
        this.$message.info('This is a normal message');
      },
    }
  }
</script>
```
:::