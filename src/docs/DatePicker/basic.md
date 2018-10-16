> 基本用法

:::demo 最简单的用法，在浮层中可以选择或者输入日期。

```html
<template>
  <div>
    <v-date-picker @change="onChange"></v-date-picker>
    <br/>  
    <br/>
    <v-month-picker @change="onChange" placeholder="Select month"></v-month-picker>
    <br/>  
    <br/>
    <v-range-picker @change="onChange"></v-range-picker>
    <br/>  
    <br/>
    <v-week-picker @change="onChange" placeholder="Select week"></v-week-picker>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
}
</script>
```
:::