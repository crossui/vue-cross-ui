> 基础栅格

:::demo 从堆叠到水平排列。使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

```html
<template>
  <div>
    <v-row>
      <v-col :span="12">col-12</v-col>
      <v-col :span="12">col-12</v-col>
    </v-row>
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
    </v-row>
  </div>
</template>
```
:::
