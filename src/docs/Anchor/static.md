> 静态位置

:::demo 不浮动，状态不随页面滚动变化。

```html
<template>
  <v-anchor :affix="false">
    <v-anchor-link href="#components-anchor-demo-basic" title="Basic demo"></v-anchor-link>
    <v-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo"></v-anchor-link>
    <v-anchor-link href="#API" title="API">
      <v-anchor-link href="#Anchor-Props" title="Anchor Props"></v-anchor-link>
      <v-anchor-link href="#Link-Props" title="Link Props"></v-anchor-link>
    </v-anchor-link>
  </v-anchor>
</template>
```
:::