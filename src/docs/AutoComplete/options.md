> 自定义选项

:::demo 也可以直接传递slot="dataSource"的Option

```html
<template>
  <v-auto-complete
    style="width: 200px"
    @search="handleSearch"
    placeholder="input here"
  >
    <template slot="dataSource">
      <v-select-option v-for="email in result"  :key="email">{{email}}</v-select-option>
    </template>
  </v-auto-complete>
</template>
<script>
export default {
  data() {
    return {
      result: [],
    }
  },
  methods: {
    handleSearch(value) {
      let result;
      if (!value || value.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
      }
      this.result = result
    },
  }
}
</script>
```
:::
