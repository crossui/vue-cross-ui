> 基本用法

:::demo 简单的checkbox

```html
<template>
  <v-checkbox @change="onChange">Checkbox</v-checkbox>
</template>
<script>
export default {
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.checked}`)
    },
  },
}
</script>
```
:::