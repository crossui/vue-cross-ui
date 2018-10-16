> 自定义输入组件

:::demo 自定义输入组件

```html
<template>
  <v-auto-complete
    :dataSource="dataSource"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <v-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    ></v-textarea>
  </v-auto-complete>
</template>
<script>
export default {
  data() {
    return {
      dataSource: [],
    }
  },
  methods: {
    onSelect(value) {
      console.log('onSelect', value);
    },
    handleSearch(value) {
      this.dataSource = !value ? [] : [
        value,
        value + value,
        value + value + value,
      ]
    },
    handleKeyPress(ev) {
      console.log('handleKeyPress', ev);
    }
  }
}
</script>
```
:::