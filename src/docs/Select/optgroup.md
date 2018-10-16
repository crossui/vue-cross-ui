> 分组

:::demo 用 `OptGroup` 进行选项分组。

```html
<template>
  <v-select defaultValue="lucy" style="width: 200px" @change="handleChange">
    <v-select-opt-group>
      <span slot="label"><v-icon type="user"></v-icon>Manager</span>
      <v-select-option value="jack">Jack</v-select-option>
      <v-select-option value="lucy">Lucy</v-select-option>
    </v-select-opt-group>
    <v-select-opt-group label="Engineer">
      <v-select-option value="Yiminghe">yiminghe</v-select-option>
    </v-select-opt-group>
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