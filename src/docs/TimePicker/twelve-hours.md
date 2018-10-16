> 12 小时制

:::demo 12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。

```html
<template>
  <div>
    <v-time-picker use12Hours @change="onChange"></v-time-picker>
    <v-time-picker use12Hours format="h:mm:ss A" @change="onChange"></v-time-picker>
    <v-time-picker use12Hours format="h:mm a" @change="onChange"></v-time-picker>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(time, timeString){
      console.log(time, timeString);
    }
  },
}
</script>
```
:::
