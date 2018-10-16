> 三种大小

:::demo 三种大小的输入框，若不设置，则为 `default`。

```html
<template>
  <div>
    <v-radio-group v-model="size">
      <v-radio-button value="large">Large</v-radio-button>
      <v-radio-button value="default">Default</v-radio-button>
      <v-radio-button value="small">Small</v-radio-button>
    </v-radio-group>
    <br />
    <br />
    <v-date-picker :size="size"></v-date-picker>
    <br />
    <br />
    <v-month-picker :size="size" placeholder="Select Month"></v-month-picker>
    <br />
    <br />
    <v-range-picker :size="size"></v-range-picker>
    <br />
    <br />
    <v-week-picker :size="size" placeholder="Select Week"></v-week-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    return {
      size: 'default',
    }
  },
}
</script>
```
:::