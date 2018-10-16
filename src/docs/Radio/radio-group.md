> 单选组合

:::demo 一组互斥的 Radio 配合使用。

```html
<template>
  <v-radio-group @change="onChange" v-model="value">
    <v-radio :value="1">A</v-radio>
    <v-radio :value="2">B</v-radio>
    <v-radio :value="3">C</v-radio>
    <v-radio :value="4">D</v-radio>
  </v-radio-group>
</template>
<script>
export default {
  data () {
    return {
      value: 1,
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    },
  },
}
</script>
```
:::