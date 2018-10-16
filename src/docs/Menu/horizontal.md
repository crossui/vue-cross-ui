> 顶部导航

:::demo 水平的顶部导航菜单。

```html
<template>
<div>
  <v-menu
    v-model="current"
    mode="horizontal"
  >
    <v-menu-item key="mail">
      <v-icon type="mail"></v-icon>Navigation One
    </v-menu-item>
    <v-menu-item key="app" disabled>
      <v-icon type="appstore"></v-icon>Navigation Two
    </v-menu-item>
    <v-sub-menu>
      <span slot="title"><v-icon type="setting"></v-icon>Navigation Three - Submenu</span>
      <v-menu-item-group title="Item 1">
        <v-menu-item key="setting:1">Option 1</v-menu-item>
        <v-menu-item key="setting:2">Option 2</v-menu-item>
      </v-menu-item-group>
      <v-menu-item-group title="Item 2">
        <v-menu-item key="setting:3">Option 3</v-menu-item>
        <v-menu-item key="setting:4">Option 4</v-menu-item>
      </v-menu-item-group>
    </v-sub-menu>
    <v-menu-item key="alipay">
      <a href="#" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
    </v-menu-item>
  </v-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      current: ['mail'],
    }
  },
}
</script>
```
:::