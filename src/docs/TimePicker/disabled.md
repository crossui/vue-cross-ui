> 禁用

:::demo 禁用时间选择。

```html
<template>
  <v-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')" disabled></v-time-picker>
</template>
<script>
import moment from 'moment';
export default {
  methods: {
    moment,
  }
}
</script>
```
:::