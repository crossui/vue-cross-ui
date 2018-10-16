> Flex 排序

:::demo 从堆叠到水平排列。通过 Flex 布局的 Order 来改变元素的排序。。

```html
<template>
  <div>
    <v-row type="flex">
      <v-col :span="6" :order="4">1 col-order-4</v-col>
      <v-col :span="6" :order="3">2 col-order-3</v-col>
      <v-col :span="6" :order="2">3 col-order-2</v-col>
      <v-col :span="6" :order="1">4 col-order-1</v-col>
    </v-row>
  </div>
</template>
```
:::
