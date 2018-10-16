> 分隔符

:::demo 使用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符

```html
<template>
<div>
  <v-breadcrumb separator=">">
    <v-breadcrumb-item>Home</v-breadcrumb-item>
    <v-breadcrumb-item href="">Application Center</v-breadcrumb-item>
    <v-breadcrumb-item href="">Application List</v-breadcrumb-item>
    <v-breadcrumb-item>An Application</v-breadcrumb-item>
  </v-breadcrumb>
  <v-breadcrumb>
    <span slot="separator" style="color: red">></span>
    <v-breadcrumb-item>Home</v-breadcrumb-item>
    <v-breadcrumb-item href="">Application Center</v-breadcrumb-item>
    <v-breadcrumb-item href="">Application List</v-breadcrumb-item>
    <v-breadcrumb-item>An Application</v-breadcrumb-item>
  </v-breadcrumb>
</div>
</template>
```
:::
