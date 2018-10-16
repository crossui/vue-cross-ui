> 带搜索框

:::demo 展开后可对选项进行搜索。

```html
<template>
  <v-select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    style="width: 200px"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    :filterOption="filterOption"
  >
    <v-select-option value="jack">Jack</v-select-option>
    <v-select-option value="lucy">Lucy</v-select-option>
    <v-select-option value="tom">Tom</v-select-option>
  </v-select>
</template>
<script>
export default {
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  }
}
</script>
```
:::

