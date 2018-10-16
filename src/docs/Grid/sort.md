> 栅格排序

:::demo 列排序。通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```html
<template>
  <div>
    <v-row>
      <v-col :span="18" :push="6">col-18 col-push-6</v-col>
      <v-col :span="6" :pull="18">col-6 col-pull-18</v-col>
    </v-row>
  </div>
</template>
```
:::





