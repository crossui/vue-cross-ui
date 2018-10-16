> 标签

:::demo tags select，随意输入的内容（scroll the menu）

```html
<template>
  <v-select
    mode="tags"
    style="width: 100%"
    @change="handleChange"
    placeholder="Tags Mode"
  >
    <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</v-select-option>
  </v-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  }
}
</script>
```
:::

