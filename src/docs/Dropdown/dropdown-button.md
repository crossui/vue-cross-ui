> 带下拉框的按钮

:::demo 左边是按钮，右边是额外的相关功能菜单。

```html
<template>
<div>
  <v-dropdown-button @click="handleMenuClick">
    Dropdown
    <v-menu slot="overlay" @click="handleMenuClick">
      <v-menu-item key="1">1st menu item</v-menu-item>
      <v-menu-item key="2">2nd menu item</v-menu-item>
      <v-menu-item key="3">3rd item</v-menu-item>
    </v-menu>
  </v-dropdown-button>
  <v-dropdown-button
    @click="handleButtonClick"
    disabled
    style="margin-left: 8px"
  >
    Dropdown
    <v-menu slot="overlay" @click="handleMenuClick">
      <v-menu-item key="1">1st menu item</v-menu-item>
      <v-menu-item key="2">2nd menu item</v-menu-item>
      <v-menu-item key="3">3rd item</v-menu-item>
    </v-menu>
  </v-dropdown-button>
  <v-dropdown>
    <v-menu slot="overlay" @click="handleMenuClick">
      <v-menu-item key="1">1st menu item</v-menu-item>
      <v-menu-item key="2">2nd menu item</v-menu-item>
      <v-menu-item key="3">3rd item</v-menu-item>
    </v-menu>
    <v-button style="margin-left: 8px">
      Button <v-icon type="down"></v-icon>
    </v-button>
  </v-dropdown>
</div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  }
}
</script>
```
:::
