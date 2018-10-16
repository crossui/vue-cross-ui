> Flex 对齐

:::demo Flex 子元素垂直对齐。

```html
<template>
  <div>
    <p>Align Top</p>
    <v-row type="flex" justify="center" align="top">
      <v-col :span="4"><p class="height-100">col-4</p></v-col>
      <v-col :span="4"><p class="height-50">col-4</p></v-col>
      <v-col :span="4"><p class="height-120">col-4</p></v-col>
      <v-col :span="4"><p class="height-80">col-4</p></v-col>
    </v-row>

    <p>Align Center</p>
    <v-row type="flex" justify="space-around" align="middle">
      <v-col :span="4"><p class="height-100">col-4</p></v-col>
      <v-col :span="4"><p class="height-50">col-4</p></v-col>
      <v-col :span="4"><p class="height-120">col-4</p></v-col>
      <v-col :span="4"><p class="height-80">col-4</p></v-col>
    </v-row>

    <p>Align Bottom</p>
    <v-row type="flex" justify="space-between" align="bottom">
      <v-col :span="4"><p class="height-100">col-4</p></v-col>
      <v-col :span="4"><p class="height-50">col-4</p></v-col>
      <v-col :span="4"><p class="height-120">col-4</p></v-col>
      <v-col :span="4"><p class="height-80">col-4</p></v-col>
    </v-row>
  </div>
</template>
```
:::
