> 基本

:::demo 最简单的用法，浮层的大小由内容区域决定。

```html
<template>
  <v-popover title="Title">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <v-button type="primary">Hover me</v-button>
  </v-popover>
</template>
```
:::