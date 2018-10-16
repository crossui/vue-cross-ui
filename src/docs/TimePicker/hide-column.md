> 选择时分

:::demo TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

```html
<template>
  <v-time-picker :defaultValue="moment('12:08', 'HH:mm')" format="HH:mm"></v-time-picker>
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
