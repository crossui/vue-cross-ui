> 左右偏移

:::demo 列偏移。使用 `offset` 可以将列向右侧偏。例如，`:offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

```html
<template>
  <div>
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8" :offset="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
      <v-col :span="6" :offset="6">col-6 col-offset-6</v-col>
    </v-row>
    <v-row>
      <v-col :span="12" :offset="6">col-12 col-offset-6</v-col>
    </v-row>
  </div>
</template>
```
:::

