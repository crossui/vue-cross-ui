> 触发方式

:::demo 默认是移入触发菜单，可以点击触发。

```html
<template>
  <v-dropdown :trigger="['click']">
    <a class="vcu-dropdown-link" href="#">
      Click me <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay">
      <v-menu-item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </v-menu-item>
      <v-menu-item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </v-menu-item>
      <v-menu-divider></v-menu-divider>
      <v-menu-item key="3">3rd menu item</v-menu-item>
    </v-menu>
  </v-dropdown>
</template>
```
:::