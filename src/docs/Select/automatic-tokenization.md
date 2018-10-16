> 自动分词

:::demo 试下复制 `露西,杰克` 到输入框里。只在 tags 和 multiple 模式下可用。

```html
<template>
  <v-select mode="tags" style="width: 100%" :tokenSeparators="[',']" @change="handleChange">
    <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</v-select-option>
  </v-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
}
</script>
```
:::