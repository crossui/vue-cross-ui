> 禁用

:::demo 选择框的不可用状态。

```html
<template>
  <div>
    <v-date-picker :defaultValue="moment('2015-06-06', dateFormat)" disabled></v-date-picker>
    <br />
    <br />
    <v-month-picker :defaultValue="moment('2015-06', 'YYYY-MM')" disabled></v-month-picker>
    <br />
    <br />
    <v-range-picker
      :defaultValue="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
      disabled
    ></v-range-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    this.dateFormat = 'YYYY-MM-DD'
    return {}
  },
  methods: {
    moment,
  }
}
</script>
```
:::