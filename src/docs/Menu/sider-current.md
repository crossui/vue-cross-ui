> 只展开当前父级菜单

:::demo 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

```html
<template>
<div>
  <v-menu
    mode="inline"
    :openKeys="openKeys"
    @openChange="onOpenChange"
    style="width: 256px"
  >
    <v-sub-menu key="sub1">
      <span slot="title"><v-icon type="mail"></v-icon><span>Navigation One</span></span>
      <v-menu-item key="1">Option 1</v-menu-item>
      <v-menu-item key="2">Option 2</v-menu-item>
      <v-menu-item key="3">Option 3</v-menu-item>
      <v-menu-item key="4">Option 4</v-menu-item>
    </v-sub-menu>
    <v-sub-menu key="sub2">
      <span slot="title"><v-icon type="appstore"></v-icon><span>Navigation Two</span></span>
      <v-menu-item key="5">Option 5</v-menu-item>
      <v-menu-item key="6">Option 6</v-menu-item>
      <v-sub-menu key="sub3" title="Submenu">
        <v-menu-item key="7">Option 7</v-menu-item>
        <v-menu-item key="8">Option 8</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
    <v-sub-menu key="sub4">
      <span slot="title"><v-icon type="setting"></v-icon><span>Navigation Three</span></span>
      <v-menu-item key="9">Option 9</v-menu-item>
      <v-menu-item key="10">Option 10</v-menu-item>
      <v-menu-item key="11">Option 11</v-menu-item>
      <v-menu-item key="12">Option 12</v-menu-item>
    </v-sub-menu>
  </v-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
  },
}

</script>
```
:::