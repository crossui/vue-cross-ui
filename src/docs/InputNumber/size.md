> 三种大小

:::demo 三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```html
<template>
  <div>
    <v-input-number size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange"></v-input-number>
    <v-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange"></v-input-number>
    <v-input-number size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange"></v-input-number>
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  }
</script>
<style scoped>
  .vcu-input-number {
    margin-right: 10px;
  }
</style>
```
:::