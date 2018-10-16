> Flex 布局

:::demo 使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

```html
<template>
  <div>
    <p>sub-element align left</p>
    <v-row type="flex" justify="start">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align center</p>
    <v-row type="flex" justify="center">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align right</p>
    <v-row type="flex" justify="end">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element monospaced arrangement</p>
    <v-row type="flex" justify="space-between">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>

    <p>sub-element align full</p>
    <v-row type="flex" justify="space-around">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
  </div>
</template>
```
:::


