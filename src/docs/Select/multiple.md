> 多选

:::demo 多选，从已有条目中选择（scroll the menu）

```html
<template>
  <v-select mode="multiple" :defaultValue="['a1', 'b2']" style="width: 100%" @change="handleChange" placeholder="Please select">
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