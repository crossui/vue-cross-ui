> RadioGroup 垂直

:::demo 垂直的 RadioGroup，配合更多输入框选项。

```html
<template>
  <v-radio-group @change="onChange" v-model="value">
    <v-radio :style="radioStyle" :value="1">Option A</v-radio>
    <v-radio :style="radioStyle" :value="2">Option B</v-radio>
    <v-radio :style="radioStyle" :value="3">Option C</v-radio>
    <v-radio :style="radioStyle" :value="4">
      More...
      <v-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }"></v-input>
    </v-radio>
  </v-radio-group>
</template>
<script>
export default {
  data () {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
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
