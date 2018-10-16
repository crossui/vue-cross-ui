> 智能提示

:::demo 输入框自动完成功能，下面是一个账号注册表单的例子。

```html
<template>
  <v-select mode="combobox" style="width: 200px" @change="handleChange" :filterOption="false"
      placeholder="Enter the account name">
    <v-select-option v-for="opt in options" :key="opt">{{opt}}</v-select-option>
  </v-select>
</template>
<script>
const domains = ['gmail.com', '163.com', 'qq.com']
export default {
  data() {
    return {
      options: [],
    }
  },
  methods: {
    handleChange(value) {
      if (!value || value.indexOf('@') >= 0) {
        this.options = [];
      } else {
        this.options = domains.map(domain => `${value}@${domain}`)
      }
    }
  }
}
</script>
```
:::