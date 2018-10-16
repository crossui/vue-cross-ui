> 基本

:::demo 数字输入框。

```html
<template>
  <div>
    <v-input-number :min="1" :max="10" v-model="value" @change="onChange"></v-input-number>
    当前值：{{value}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3
      }
    },
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  }
</script>
```
:::