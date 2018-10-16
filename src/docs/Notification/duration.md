> 自动关闭的延时

:::demo 自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

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
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          duration: 0,
        });
      },
    }
  }
</script>
```
:::