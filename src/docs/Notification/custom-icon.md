> 自定义图标

:::demo 图标可以被自定义。

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
          icon: <v-icon type="smile" style="color: #108ee9"></v-icon>,
        });
      },
    }
  }
</script>
```
:::