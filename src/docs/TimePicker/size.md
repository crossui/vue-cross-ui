> 三种大小

:::demo 三种大小的输入框，大的用在表单中，中的为默认。

```html
<template>
  <div>
    <v-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" size="large"></v-time-picker>
    <v-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')"></v-time-picker>
    <v-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" size="small"></v-time-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  methods: {
    moment,
  },
}
</script>
```
:::
