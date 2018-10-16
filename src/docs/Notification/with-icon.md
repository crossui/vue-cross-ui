> 带有图标

:::demo 通知提醒框左侧有图标。

```html
<template>
  <div>
    <v-button @click="() => openNotificationWithIcon('success')">Success</v-button>
    <v-button @click="() => openNotificationWithIcon('info')">Info</v-button>
    <v-button @click="() => openNotificationWithIcon('warning')">Warning</v-button>
    <v-button @click="() => openNotificationWithIcon('error')">Error</v-button>
  </div>
</template>
<script>
  export default {
    methods: {
      openNotificationWithIcon (type) {
        this.$notification[type]({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
    }
  }
</script>
```
:::