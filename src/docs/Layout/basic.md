> 基本结构

:::demo 典型的页面布局。

```html
<template>
  <div id="components-layout-demo-basic">
    <v-layout>
      <v-layout-header>Header</v-layout-header>
      <v-layout-content>Content</v-layout-content>
      <v-layout-footer>Footer</v-layout-footer>
    </v-layout>

    <v-layout>
      <v-layout-header>Header</v-layout-header>
      <v-layout>
        <v-layout-sider>Sider</v-layout-sider>
        <v-layout-content>Content</v-layout-content>
      </v-layout>
      <v-layout-footer>Footer</v-layout-footer>
    </v-layout>

    <v-layout>
      <v-layout-header>Header</v-layout-header>
      <v-layout>
        <v-layout-content>Content</v-layout-content>
        <v-layout-sider>Sider</v-layout-sider>
      </v-layout>
      <v-layout-footer>Footer</v-layout-footer>
    </v-layout>

    <v-layout>
      <v-layout-sider>Sider</v-layout-sider>
      <v-layout>
        <v-layout-header>Header</v-layout-header>
        <v-layout-content>Content</v-layout-content>
        <v-layout-footer>Footer</v-layout-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .vcu-layout-header,
#components-layout-demo-basic .vcu-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .vcu-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .vcu-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .vcu-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .vcu-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .vcu-layout:last-child {
  margin: 0;
}
</style>
```
:::
