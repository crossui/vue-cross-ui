> 按钮类型

:::demo 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。通过设置type为 `primary`、`dashed`、`danger`、`text`、`info`、`success`、`warning`、`error`创建不同样式的按钮，不设置为默认样式。

```html
<template>
  <div>
    <v-button type="primary">Primary</v-button>
    <v-button type="info">info</v-button>
    <v-button type="success">success</v-button>
    <v-button type="warning">warning</v-button>
    <v-button type="error">error</v-button>
    <br />
    <br />
    <v-button type="text">text</v-button>
    <v-button>Default</v-button>
    <v-button type="dashed">Dashed</v-button>
    <v-button type="danger">Danger</v-button>
  </div>
</template>
```
:::