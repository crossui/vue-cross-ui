> 垂直菜单

:::demo 子菜单是弹出的形式。

```html
<template>
<div>
  <v-menu
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <v-menu-item key="1">
      <v-icon type="mail"></v-icon>
      Navigation One
    </v-menu-item>
    <v-menu-item key="2">
      <v-icon type="calendar"></v-icon>
      Navigation Two
    </v-menu-item>
    <v-sub-menu key="sub1">
      <span slot="title"><v-icon type="appstore"></v-icon><span>Navigation Three</span></span>
      <v-menu-item key="3">Option 3</v-menu-item>
      <v-menu-item key="4">Option 4</v-menu-item>
      <v-sub-menu key="sub1-2" title="Submenu">
        <v-menu-item key="5">Option 5</v-menu-item>
        <v-menu-item key="6">Option 6</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
    <v-sub-menu key="sub2">
      <span slot="title"><v-icon type="setting"></v-icon><span>Navigation Four</span></span>
      <v-menu-item key="7">Option 7</v-menu-item>
      <v-menu-item key="8">Option 8</v-menu-item>
      <v-menu-item key="9">Option 9</v-menu-item>
      <v-menu-item key="10">Option 10</v-menu-item>
    </v-sub-menu>
  </v-menu>
</div>
</template>
<script>
export default {
  methods: {
    handleClick (e) {
      console.log('click ', e)
    },
  },
}

</script>
```
:::