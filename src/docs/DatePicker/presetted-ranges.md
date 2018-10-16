> 预设范围

:::demo RangePicker 可以设置常用的 预设范围 提高用户体验。

```html
<template>
  <div>
    <v-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
      @change="onChange"
    ></v-range-picker>
    <br />
    <br />
    <v-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      @change="onChange"
    ></v-range-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
    }
  },
  methods: {
    moment,
    onChange(dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    },
  }
}
</script>
```
:::