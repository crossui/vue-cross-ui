> 基本

:::demo 最简单的下拉菜单。

```html
<template>
  <v-dropdown>
    <a class="vcu-dropdown-link" href="#">
      Hover me <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay">
      <v-menu-item>
        <a href="javascript:;">1st menu item</a>
      </v-menu-item>
      <v-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </v-menu-item>
      <v-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </v-menu-item>
    </v-menu>
  </v-dropdown>
</template>
```
:::