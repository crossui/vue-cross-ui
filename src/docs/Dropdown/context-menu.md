> 右键菜单

:::demo 默认是移入触发菜单，可以鼠标右键触发。

```html
<template>
  <v-dropdown :trigger="['contextmenu']">
    <span style="user-select: none">Right Click on Me</span>
    <v-menu slot="overlay">
      <v-menu-item key="1">1st menu item</v-menu-item>
      <v-menu-item key="2">2nd menu item</v-menu-item>
      <v-menu-item key="3">3rd menu item</v-menu-item>
    </v-menu>
  </v-dropdown>
</template>
```
:::