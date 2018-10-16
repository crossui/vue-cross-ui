> 多级菜单

:::demo 传入的菜单里有多个层级。

```html
<template>
  <v-dropdown>
    <a class="vcu-dropdown-link" href="#">
      Cascading menu <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay">
      <v-menu-item>1st menu item</v-menu-item>
      <v-menu-item>2nd menu item</v-menu-item>
      <v-sub-menu title="sub menu" key="test">
        <v-menu-item>3rd menu item</v-menu-item>
        <v-menu-item>4th menu item</v-menu-item>
      </v-sub-menu>
      <v-sub-menu title="disabled sub menu" disabled>
        <v-menu-item>5d menu item</v-menu-item>
        <v-menu-item>6th menu item</v-menu-item>
      </v-sub-menu>
    </v-menu>
  </v-dropdown>
</template>
```
:::