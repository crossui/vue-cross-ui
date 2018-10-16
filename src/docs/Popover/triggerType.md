> 三种触发方式

:::demo 鼠标移入、聚集、点击。

```html
<template>
<div>
  <v-popover title="Title" trigger="hover">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <v-button type="primary">Hover me</v-button>
  </v-popover>
  <v-popover title="Title" trigger="focus">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <v-button type="primary">Focus me</v-button>
  </v-popover>
  <v-popover title="Title" trigger="click">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <v-button type="primary">Click me</v-button>
  </v-popover>
</div>
</template>
```
:::