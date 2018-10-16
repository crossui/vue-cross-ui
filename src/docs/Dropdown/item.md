> 其他元素

:::demo 分割线和不可用菜单项。

```html
<template>
  <v-dropdown>
    <a class="vcu-dropdown-link" href="#">
      Hover me <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay">
      <v-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </v-menu-item>
      <v-menu-item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </v-menu-item>
      <v-menu-divider></v-menu-divider>
      <v-menu-item key="3" disabled>3rd menu item（disabled）</v-menu-item>
    </v-menu>
  </v-dropdown>
</template>
```
:::

