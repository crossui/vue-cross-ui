> 位置

:::demo 可以设置通知从右上角、右下角、左下角、左上角弹出。

```html
<template>
  <div>
    <v-select v-model="selected" :style="{ width: '120px', marginRight: '10px' }">
      <v-select-option v-for="val in options" :key="val" :value="val">{{val}}</v-select-option>
    </v-select>
    <v-button type="primary" @click="openNotification">Open the notification box</v-button>
  </div>
</template>
<script>
  const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  export default {
    data () {
      return {
        options,
        selected: 'topRight',
      }
    },
    watch: {
      selected(val) {
        this.$notification.config({
          placement: val,
        });
      }
    },
    methods: {
      openNotification (val) {
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