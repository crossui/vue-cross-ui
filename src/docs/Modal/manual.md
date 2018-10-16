> 手动移除

:::demo 手动关闭modal。

```html
<template>
  <v-button @click="success">Success</v-button>
</template>
<script>
export default {
  methods: {
    success() {
      const modal = this.$success({
        title: 'This is a notification message',
        content: 'This modal will be destroyed after 1 second',
      });
      setTimeout(() => modal.destroy(), 1000);
    }
  }
}
</script>
```
:::
