> 单选组合 - 配合 name 使用

:::demo 可以为 RadioGroup 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

```html
<template>
  <v-radio-group name="radioGroup" :defaultValue="1">
    <v-radio :value="1">A</v-radio>
    <v-radio :value="2">B</v-radio>
    <v-radio :value="3">C</v-radio>
    <v-radio :value="4">D</v-radio>
  </v-radio-group>
</template>
```
:::