> 日期格式

:::demo 使用 `format` 属性，可以自定义日期显示格式。

```html
<template>
  <div>
    <v-date-picker :defaultValue="moment('2015/01/01', dateFormat)" :format="dateFormat"></v-date-picker>
    <br />
    <br />
    <v-month-picker :defaultValue="moment('2015/01', monthFormat)" :format="monthFormat"></v-month-picker>
    <br />
    <br />
    <v-range-picker
      :defaultValue="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
      :format="dateFormat"
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
  }
}
</script>
```
:::