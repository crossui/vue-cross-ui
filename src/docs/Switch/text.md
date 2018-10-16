> 文字和图标

:::demo 带有文字和图标。

```html
<template>
  <div>
    <v-switch checkedChildren="开" unCheckedChildren="关" defaultChecked></v-switch>
    <br>
    <br>
    <v-switch checkedChildren="1" unCheckedChildren="0"></v-switch>
    <br>
    <br>
    <v-switch defaultChecked >
      <v-icon type="check" slot="checkedChildren"></v-icon>
      <v-icon type="close" slot="unCheckedChildren"></v-icon>
    </v-switch>
  </div>
</template>
```
:::