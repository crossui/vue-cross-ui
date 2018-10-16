> RadioGroup 组合 - 配置方式

:::demo 通过配置 `options` 参数来渲染单选框。

```html
<template>
<div>
  <v-radio-group :options="plainOptions" @change="onChange1" :defaultValue="value1"></v-radio-group>
  <br />
  <br />
  <v-radio-group :options="options" @change="onChange2" v-model="value2"></v-radio-group>
  <br />
  <br />
  <v-radio-group :options="optionsWithDisabled" disabled @change="onChange3" v-model="value3"></v-radio-group>
</div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
]
export default {
  data () {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1: 'Apple',
      value2: 'Apple',
      value3: 'Apple',
    }
  },
  methods: {
    onChange1 (e) {
      console.log('radio1 checked', e.target.value)
    },
    onChange2 (e) {
      console.log('radio2 checked', e.target.value)
    },
    onChange3 (e) {
      console.log('radio3 checked', e.target.value)
    },
  },
}
</script>
```
:::
