> 分隔符

:::demo 通过设置`separator`属性来自定义分隔符，比如 `>` ，也可以接受自定义的HTML字符串。

```html
<template>
<div>
  <v-breadcrumb separator=">">
        <v-breadcrumb-item to="/">Home</v-breadcrumb-item>
        <v-breadcrumb-item to="/components/breadcrumb">Components</v-breadcrumb-item>
        <v-breadcrumb-item>Breadcrumb</v-breadcrumb-item>
    </v-breadcrumb>
    <v-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <v-breadcrumb-item to="/">Home</v-breadcrumb-item>
        <v-breadcrumb-item to="/components/breadcrumb">Components</v-breadcrumb-item>
        <v-breadcrumb-item>Breadcrumb</v-breadcrumb-item>
    </v-breadcrumb>
</div>
</template>
```
:::
