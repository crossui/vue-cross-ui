> 布局

:::demo Checkbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局

```html
<template>
  <v-checkbox-group @change="onChange">
    <v-row>
      <v-col :span="8"><v-checkbox value="A">A</v-checkbox></v-col>
      <v-col :span="8"><v-checkbox value="B">B</v-checkbox></v-col>
      <v-col :span="8"><v-checkbox value="C">C</v-checkbox></v-col>
      <v-col :span="8"><v-checkbox value="D">D</v-checkbox></v-col>
      <v-col :span="8"><v-checkbox value="E">E</v-checkbox></v-col>
    </v-row>
  </v-checkbox-group>
</template>
<script>
export default {
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
    },
  },
}
</script>
```
:::