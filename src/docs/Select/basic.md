> 基本使用

:::demo 最简单的用法。

```html
<template>
  <div>
    <v-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <v-select-option value="jack">Jack</v-select-option>
      <v-select-option value="lucy">Lucy</v-select-option>
      <v-select-option value="disabled" disabled>Disabled</v-select-option>
      <v-select-option value="Yiminghe">yiminghe</v-select-option>
    </v-select>
    <v-select defaultValue="lucy" style='width: 120px' allowClear disabled>
      <v-select-option value="lucy">Lucy</v-select-option>
    </v-select>
  </div>
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