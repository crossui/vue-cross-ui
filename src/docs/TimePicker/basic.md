> 基本

:::demo 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

```html
<template>
  <v-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')"></v-time-picker>
</template>
<script>
import moment from 'moment';
export default {
  methods: {
    moment,
    onChange(time, timeString){
      console.log(time, timeString);
    }
  },
}
</script>
```
:::