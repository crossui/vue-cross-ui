> Checkbox组

:::demo 方便的从数组生成checkbox

```html
<template>
  <div>
    <v-checkbox-group :options="plainOptions" v-model="value" @change="onChange"></v-checkbox-group>
    <br /><br />
    <v-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange"></v-checkbox-group>
    <br /><br />
    <v-checkbox-group :options="options" :value="['Pear']" @change="onChange"></v-checkbox-group>
    <br /><br />
    <v-checkbox-group :options="optionsWithDisabled" disabled :defaultValue="['Apple']" @change="onChange"></v-checkbox-group>
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
      value: [],
    }
  },
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
      console.log('value = ', this.value)
    },
  },
}
</script>
```
:::