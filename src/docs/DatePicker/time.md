> 日期时间选择

:::demo 增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

```html
<template>
  <div>
    <v-date-picker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      @change="onChange"
      @ok="onOk"
    ></v-date-picker>
    <br />
    <br />
    <v-range-picker
      :showTime="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['Start Time', 'End Time']"
      @change="onChange"
      @ok="onOk"
    ></v-range-picker>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    },
    onOk(value) {
      console.log('onOk: ', value);
    }
  }
}
</script>
```
:::