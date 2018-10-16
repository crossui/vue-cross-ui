> 自定义样式

:::demo 使用 style 和 className 来定义样式。

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
          style: {
            width: '600px',
            marginLeft: `${335 - 600}px`,
          },
        });
      },
    }
  }
</script>
```
:::