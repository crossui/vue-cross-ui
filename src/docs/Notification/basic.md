> 基本

:::demo 最简单的用法，4.5 秒后自动关闭。

```html
<template>
  <v-button type="primary" @click="openNotification">Open the notification box</v-button>
</template>
<script>
  export default {
    methods: {
      openNotification () {
        this.$notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
    }
  }
</script>
```
:::